import '../../assets/icons/rionite-file-upload__icon-spinner.svg';
import '../../assets/icons/rionite-file-upload__icon-file.svg';
import '../../assets/icons/rionite-file-upload__icon-trash.svg';
import './index.css';

import { define } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { getText, Component, d } from 'rionite';
import ReadableFile from './ReadableFile';
import escapeRegExp from './escapeRegExp';
import template = require('./index.beml');

let i18n = {
	dropFilesHereOr: getText.t('Перетащите файлы в эту область или'),
	btnSelectFilesText: getText.t('нажмите для выбора в проводнике'),
	typeErrorMessage: getText.t('Файл не подходит по типу'),
	sizeErrorMessage: getText.t('Файл слишком большой')
};

@d.Component<RioniteFileUpload>({
	elementIs: 'rionite-file-upload',

	props: {
		typePattern: { type: String, readonly: true },
		sizeLimit: Number
	},

	i18n,

	bemlTemplate: template,

	events: {
		'files-input': {
			change(evt: Event) {
				this._addFiles(evt.target['files']);
			}
		},

		'drop-zone': {
			dragenter(evt: DragEvent) {
				this.error = false;
				(evt.target as HTMLElement).setAttribute('over', '');
			},

			dragover(evt: DragEvent) {
				evt.preventDefault();
				evt.dataTransfer.dropEffect = 'copy';
			},

			dragleave(evt: DragEvent) {
				(evt.target as HTMLElement).removeAttribute('over');
			},

			drop(evt: DragEvent) {
				evt.preventDefault();

				(evt.target as HTMLElement).removeAttribute('over');

				this._addFiles(evt.dataTransfer.files);
			},

			click() {
				if (this.error) {
					this.error = false;
				} else {
					(this.$('files-input') as HTMLElement).click();
				}
			}
		}
	}
})
export default class RioniteFileUpload extends Component {
	files: IndexedList<ReadableFile>;

	_reFileType: RegExp;

	errorMessage: string | null;
	error: boolean;

	initialize() {
		this.files = new IndexedList<ReadableFile>();

		let typePattern = this.props['typePattern'];

		if (typePattern) {
			this._reFileType = RegExp(`^${ escapeRegExp(typePattern).split('\\*').join('.*') }$`);
		}

		define(this, {
			errorMessage: null,
			error: false
		});
	}

	_onBtnRemoveFileClick(evt: Event, btn: HTMLElement) {
		this.files.remove(this.files.get(btn.dataset['fileId'], 'id'));
	}

	_addFiles(files: FileList) {
		let sizeLimit = this.props['sizeLimit'];
		let reFileType = this._reFileType;
		let errorMessage: string | undefined;

		for (let i = 0, l = files.length; i < l; i++) {
			let file = files[i];

			if (reFileType && !reFileType.test(file.type)) {
				errorMessage = i18n.typeErrorMessage;
			} else if (file.size > sizeLimit) {
				errorMessage = i18n.sizeErrorMessage;
			}

			if (errorMessage) {
				this.errorMessage = errorMessage;
				this.error = true;
				break;
			}
		}

		if (!errorMessage) {
			for (let i = 0, l = files.length; i < l; i++) {
				let readableFile = new ReadableFile(files[i]);
				readableFile.read();
				this.files.add(readableFile);
			}
		}
	}
}
