import '../../assets/icons/rionite-file-upload__icon-spinner.svg';
import '../../assets/icons/rionite-file-upload__icon-file.svg';
import '../../assets/icons/rionite-file-upload__icon-trash.svg';
import './index.css';
import { IndexedList } from 'cellx-indexed-collections';
import { Component } from 'rionite';
import ReadableFile from './ReadableFile';
export default class RioniteFileUpload extends Component {
    files: IndexedList<ReadableFile>;
    _reFileType: RegExp;
    _size: number;
    errorMessage: string | null;
    error: boolean;
    initialize(): void;
    _onBtnRemoveFileClick(evt: Event, btn: HTMLElement): void;
    _addFiles(files: FileList): void;
}
