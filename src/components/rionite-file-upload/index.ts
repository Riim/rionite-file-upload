import { escapeRegExp } from '@riim/escape-regexp';
import { getText } from '@riim/gettext';
import { define, EventEmitter } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { Component, d } from 'rionite';
import '../../assets/icons/rionite-file-upload__icon-file.svg';
import '../../assets/icons/rionite-file-upload__icon-spinner.svg';
import '../../assets/icons/rionite-file-upload__icon-trash.svg';
import './index.css';
import { ReadableFile } from './ReadableFile';
import template from './template.nelm';

let i18n = {
	dropFilesHereOr: getText.t('Перетащите файлы в эту область или'),
	btnSelectFilesText: getText.t('нажмите для выбора в проводнике'),
	typeErrorMessage: getText.t('Файл не подходит по типу'),
	sizeErrorMessage: getText.t('Файл слишком большой'),
	totalSizeErrorMessage: getText.t('Превышен лимит суммарного размера файлов')
};

@d.Component<RioniteFileUpload>({
	elementIs: 'rionite-file-upload',

	input: {
		typePattern: { type: String, readonly: true },
		sizeLimit: Number,
		totalSizeLimit: Number
	},

	i18n,

	template,

	domEvents: {
		'btn-remove-file': {
			click(evt: Event, btn: HTMLElement) {
				let file = this.files.get(btn.dataset['fileId'], 'id')!;
				this._size -= file.size;
				this.files.remove(file);
			}
		}
	}
})
export class RioniteFileUpload extends Component {
	_reFileType: RegExp;

	_size = 0;

	files: IndexedList<ReadableFile>;

	errorMessage: string | null;
	error: boolean;

	initialize() {
		this.files = new IndexedList<ReadableFile>();

		let typePattern = this.input.typePattern;

		if (typePattern) {
			this._reFileType = RegExp(`^${ escapeRegExp(typePattern).split('\\*').join('.*') }$`);
		}

		define((this as any) as EventEmitter, {
			errorMessage: null,
			error: false
		});
	}

	elementAttached() {
		this.listenTo(this.$<Node>('files-input')!, 'change', this._onFilesInputChange);

		this.listenTo(this.$<Node>('drop-zone')!, {
			dragenter: this._onDropZoneDragEnter,
			dragover: this._onDropZoneDragOver,
			dragleave: this._onDropZoneDragLeave,
			drop: this._onDropZoneDrop,
			click: this._onDropZoneClick
		});
	}

	_onFilesInputChange(evt: Event) {
		this._addFiles((evt.target as any).files);
	}

	_onDropZoneDragEnter(evt: DragEvent) {
		this.error = false;
		(evt.target as HTMLElement).setAttribute('over', '');
	}

	_onDropZoneDragOver(evt: DragEvent) {
		evt.preventDefault();
		evt.dataTransfer.dropEffect = 'copy';
	}

	_onDropZoneDragLeave(evt: DragEvent) {
		(evt.target as HTMLElement).removeAttribute('over');
	}

	_onDropZoneDrop(evt: DragEvent) {
		evt.preventDefault();

		(evt.target as HTMLElement).removeAttribute('over');

		this._addFiles(evt.dataTransfer.files);
	}

	_onDropZoneClick() {
		if (this.error) {
			this.error = false;
		} else {
			this.$<HTMLElement>('files-input')!.click();
		}
	}

	_addFiles(files: FileList) {
		let sizeLimit = this.input.sizeLimit;
		let totalSizeLimit = this.input.totalSizeLimit;
		let reFileType = this._reFileType;
		let size = this._size;
		let errorMessage: string | undefined;

		for (let i = 0, l = files.length; i < l; i++) {
			let file = files[i];

			size += file.size;

			if (reFileType && !reFileType.test(file.type)) {
				errorMessage = i18n.typeErrorMessage;
			} else if (sizeLimit && file.size > sizeLimit) {
				errorMessage = i18n.sizeErrorMessage;
			} else if (totalSizeLimit && size > totalSizeLimit) {
				errorMessage = i18n.totalSizeErrorMessage;
			}

			if (errorMessage) {
				this.errorMessage = errorMessage;
				this.error = true;
				break;
			}
		}

		if (!errorMessage) {
			this._size = size;

			for (let i = 0, l = files.length; i < l; i++) {
				let readableFile = new ReadableFile(files[i]);
				readableFile.read();
				this.files.add(readableFile);
			}
		}
	}
}

export { ReadableFile };
