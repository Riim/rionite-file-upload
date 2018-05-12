import { escapeRegExp } from '@riim/escape-regexp';
import { getText } from '@riim/gettext';
import { define, ObservableList } from 'cellx';
import { BaseComponent, Component, Param } from 'rionite';
import './icons/RioniteFileUpload__iconFile.svg';
import './icons/RioniteFileUpload__iconSpinner.svg';
import './icons/RioniteFileUpload__iconTrash.svg';
import './index.css';
import { ReadableFile } from './ReadableFile';
import template from './template.nelm';

export { ReadableFile };

const i18n = {
	dropFilesHereOr: getText.t('Перетащите файлы в эту область или'),
	btnSelectFilesText: getText.t('нажмите для выбора в проводнике'),
	typeErrorMessage: getText.t('Файл не подходит по типу'),
	sizeErrorMessage: getText.t('Файл слишком большой'),
	totalSizeErrorMessage: getText.t('Превышен лимит суммарного размера файлов')
};

@Component<RioniteFileUpload>({
	elementIs: 'RioniteFileUpload',

	i18n,
	template,

	domEvents: {
		btnRemoveFile: {
			click(evt, context) {
				let file: ReadableFile = context.file;
				this._size -= file.size;
				this.files.remove(file);
			}
		}
	}
})
export class RioniteFileUpload extends BaseComponent {
	@Param({ readonly: true })
	paramAllowType: string;
	@Param paramSizeLimit: number;
	@Param paramTotalSizeLimit: number;

	_reFileType: RegExp;

	_size = 0;

	files: ObservableList<ReadableFile>;

	errorMessage: string | null;
	error: boolean;

	initialize() {
		this.files = new ObservableList<ReadableFile>();

		if (this.paramAllowType) {
			this._reFileType = RegExp(
				`^(?:${this.paramAllowType
					.split(',')
					.map(type => escapeRegExp(type.trim()))
					.join('|')
					.split('\\*')
					.join('.*')})$`
			);
		}

		define(this, {
			errorMessage: null,
			error: false
		});
	}

	elementAttached() {
		this.listenTo(this.$<Node>('filesInput')!, 'change', this._onFilesInputChange);
		this.listenTo(this.$<Node>('dropZone')!, {
			dragenter: this._onDropZoneDragEnter,
			dragover: this._onDropZoneDragOver,
			dragleave: this._onDropZoneDragLeave,
			drop: this._onDropZoneDrop,
			click: this._onDropZoneClick
		});
	}

	_onFilesInputChange(evt: Event) {
		this._addFiles((evt.target as HTMLInputElement).files!);
		(evt.target as HTMLInputElement).value = '';
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
			this.$<HTMLElement>('filesInput')!.click();
		}
	}

	_addFiles(files: FileList): boolean {
		let sizeLimit = this.paramSizeLimit;
		let totalSizeLimit = this.paramTotalSizeLimit;
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
				return false;
			}
		}

		this._size = size;

		for (let i = 0, l = files.length; i < l; i++) {
			let readableFile = new ReadableFile(files[i]);
			readableFile.read();
			this.files.add(readableFile);
		}

		return true;
	}
}
