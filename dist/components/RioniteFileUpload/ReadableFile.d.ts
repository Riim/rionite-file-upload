import { EventEmitter } from 'cellx';
export declare class ReadableFile extends EventEmitter {
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
    constructor(file: File);
    read(): void;
    _onReaderLoad(evt: Event): void;
}
