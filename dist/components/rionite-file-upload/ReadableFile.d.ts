import { EventEmitter } from 'cellx';
export default class ReadableFile extends EventEmitter {
    readonly _file: File;
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
    constructor(file: File);
    read(): void;
    _onReaderLoad(evt: Event): void;
}
