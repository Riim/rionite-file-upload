import { IndexedList } from 'cellx-indexed-collections';
import { BaseComponent } from 'rionite';
import './icons/RioniteFileUpload__iconFile.svg';
import './icons/RioniteFileUpload__iconSpinner.svg';
import './icons/RioniteFileUpload__iconTrash.svg';
import './index.css';
import { ReadableFile } from './ReadableFile';
export { ReadableFile };
export declare class RioniteFileUpload extends BaseComponent {
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
