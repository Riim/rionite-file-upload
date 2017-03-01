import { EventEmitter, define, Utils } from 'cellx';

let nextUID = Utils.nextUID;

let imageTypePrefix = 'image/';

export default class ReadableFile extends EventEmitter {
	readonly file: File;

	readonly id: string;
	readonly type: string;
	readonly isImage: boolean;
	readonly name: string;
	readonly size: number;
	readonly lastModifiedDate: number;

	reader: FileReader;

	currentlyReading: boolean;
	readed: boolean;

	binaryString: string;
	dataURI: string;

	constructor(file: File) {
		super();

		this.file = file;

		this.id = nextUID();
		this.type = file.type;
		this.isImage = file.type.slice(0, imageTypePrefix.length) == imageTypePrefix;
		this.name = file.name;
		this.size = file.size;
		this.lastModifiedDate = file.lastModifiedDate.toLocaleDateString();

		define(this, {
			currentlyReading: false,
			readed: false
		});
	}

	read() {
		let reader = this.reader = new FileReader();
		reader.addEventListener('load', this._onReaderLoad.bind(this));
		this.currentlyReading = true;
		reader.readAsBinaryString(this.file);
	}

	_onReaderLoad(evt: Event) {
		let binaryString = this.binaryString = evt.target['result'];
		this.dataURI = `data:${ this.type };base64,${ btoa(binaryString) }`;
		this.currentlyReading = false;
		this.readed = true;
	}
}
