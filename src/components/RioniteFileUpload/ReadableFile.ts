import { nextUID } from '@riim/next-uid';
import { define, EventEmitter } from 'cellx';

const imageTypePrefix = 'image/';

export class ReadableFile extends EventEmitter {
	readonly file: File;

	readonly id: string;
	readonly type: string;
	readonly isImage: boolean;
	readonly name: string;
	readonly size: number;

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

		define(this, {
			currentlyReading: false,
			readed: false
		});
	}

	read() {
		let reader = (this.reader = new FileReader());
		reader.addEventListener('load', this._onReaderLoad.bind(this));
		this.currentlyReading = true;
		reader.readAsBinaryString(this.file);
	}

	_onReaderLoad(evt: Event) {
		let binaryString = (this.binaryString = (evt.target as any).result);
		this.dataURI = `data:${this.type};base64,${btoa(binaryString)}`;
		this.currentlyReading = false;
		this.readed = true;
	}
}
