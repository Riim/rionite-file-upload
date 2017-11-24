import { IndexedList } from 'cellx-indexed-collections';
import { Component } from 'rionite';
import '../../assets/icons/RioniteFileUpload__icon-file.svg';
import '../../assets/icons/RioniteFileUpload__icon-spinner.svg';
import '../../assets/icons/RioniteFileUpload__icon-trash.svg';
import './index.css';
import { ReadableFile } from './ReadableFile';
export declare class RioniteFileUpload extends Component {
    paramAllowType: string;
    paramSizeLimit: number;
    paramTotalSizeLimit: number;
    _reFileType: RegExp;
    _size: number;
    files: IndexedList<ReadableFile>;
    errorMessage: string | null;
    error: boolean;
    initialize(): void;
    elementAttached(): void;
    _onFilesInputChange(evt: Event): void;
    _onDropZoneDragEnter(evt: DragEvent): void;
    _onDropZoneDragOver(evt: DragEvent): void;
    _onDropZoneDragLeave(evt: DragEvent): void;
    _onDropZoneDrop(evt: DragEvent): void;
    _onDropZoneClick(): void;
    _addFiles(files: FileList): boolean;
}
export { ReadableFile };
