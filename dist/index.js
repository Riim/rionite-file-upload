(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("@riim/escape-regexp"), require("@riim/gettext"), require("cellx"), require("rionite"), require("@riim/next-uid"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "@riim/escape-regexp", "@riim/gettext", "cellx", "rionite", "@riim/next-uid"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("reflect-metadata"), require("@riim/escape-regexp"), require("@riim/gettext"), require("cellx"), require("rionite"), require("@riim/next-uid"));
	else
		root["index"] = factory(root["reflect-metadata"], root["@riim/escape-regexp"], root["@riim/gettext"], root["cellx"], root["rionite"], root["@riim/next-uid"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var RioniteFileUpload_1 = __webpack_require__(2);
exports.RioniteFileUpload = RioniteFileUpload_1.RioniteFileUpload;
exports.ReadableFile = RioniteFileUpload_1.ReadableFile;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_regexp_1 = __webpack_require__(3);
const gettext_1 = __webpack_require__(4);
const cellx_1 = __webpack_require__(5);
const rionite_1 = __webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
const ReadableFile_1 = __webpack_require__(11);
exports.ReadableFile = ReadableFile_1.ReadableFile;
const template_rnt_1 = __webpack_require__(13);
let RioniteFileUpload = class RioniteFileUpload extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this._size = 0;
    }
    initialize() {
        this.files = new cellx_1.ObservableList();
        if (this.paramAllowType) {
            this._reFileType = RegExp(`^(?:${this.paramAllowType
                .split(',')
                .map(type => escape_regexp_1.escapeRegExp(type.trim()))
                .join('|')
                .split('\\*')
                .join('.*')})$`);
        }
        cellx_1.define(this, {
            errorMessage: null,
            error: false
        });
    }
    elementAttached() {
        this.listenTo(this.$('filesInput'), 'change', this._onFilesInputChange);
        this.listenTo(this.$('dropZone'), {
            dragenter: this._onDropZoneDragEnter,
            dragover: this._onDropZoneDragOver,
            dragleave: this._onDropZoneDragLeave,
            drop: this._onDropZoneDrop,
            click: this._onDropZoneClick
        });
    }
    _onFilesInputChange(evt) {
        this._addFiles(evt.target.files);
        evt.target.value = '';
    }
    _onDropZoneDragEnter(evt) {
        this.error = false;
        evt.target.setAttribute('over', '');
    }
    _onDropZoneDragOver(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }
    _onDropZoneDragLeave(evt) {
        evt.target.removeAttribute('over');
    }
    _onDropZoneDrop(evt) {
        evt.preventDefault();
        evt.target.removeAttribute('over');
        this._addFiles(evt.dataTransfer.files);
    }
    _onDropZoneClick() {
        if (this.error) {
            this.error = false;
        }
        else {
            this.$('filesInput').click();
        }
    }
    _addFiles(files) {
        let sizeLimit = this.paramSizeLimit;
        let totalSizeLimit = this.paramTotalSizeLimit;
        let reFileType = this._reFileType;
        let size = this._size;
        let errorMessage;
        for (let i = 0, l = files.length; i < l; i++) {
            let file = files[i];
            size += file.size;
            if (reFileType && !reFileType.test(file.type)) {
                errorMessage = gettext_1.t('Файл не подходит по типу');
            }
            else if (sizeLimit && file.size > sizeLimit) {
                errorMessage = gettext_1.t('Файл слишком большой');
            }
            else if (totalSizeLimit && size > totalSizeLimit) {
                errorMessage = gettext_1.t('Превышен лимит суммарного размера файлов');
            }
            if (errorMessage) {
                this.errorMessage = errorMessage;
                this.error = true;
                return false;
            }
        }
        this._size = size;
        for (let i = 0, l = files.length; i < l; i++) {
            let readableFile = new ReadableFile_1.ReadableFile(files[i]);
            readableFile.read();
            this.files.add(readableFile);
        }
        return true;
    }
};
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", String)
], RioniteFileUpload.prototype, "paramAllowType", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Number)
], RioniteFileUpload.prototype, "paramSizeLimit", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Number)
], RioniteFileUpload.prototype, "paramTotalSizeLimit", void 0);
RioniteFileUpload = __decorate([
    rionite_1.Component({
        elementIs: 'RioniteFileUpload',
        template: template_rnt_1.default,
        domEvents: {
            btnRemoveFile: {
                click(_evt, context) {
                    let file = context.file;
                    this._size -= file.size;
                    this.files.remove(file);
                }
            }
        }
    })
], RioniteFileUpload);
exports.RioniteFileUpload = RioniteFileUpload;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" id=\"RioniteFileUpload__iconFile\"><path d=\"M28.681 7.159c-.694-.947-1.662-2.053-2.724-3.116s-2.169-2.03-3.116-2.724C21.229.137 20.448 0 20 0H4.5A2.503 2.503 0 0 0 2 2.5v27C2 30.878 3.122 32 4.5 32h23c1.378 0 2.5-1.122 2.5-2.5V10c0-.448-.137-1.23-1.319-2.841zm-4.138-1.702A27.334 27.334 0 0 1 26.811 8H22V3.189a27.334 27.334 0 0 1 2.543 2.268zM28 29.5c0 .271-.229.5-.5.5h-23a.507.507 0 0 1-.5-.5v-27c0-.271.229-.5.5-.5H20v7a1 1 0 0 0 1 1h7v19.5z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" id=\"RioniteFileUpload__iconSpinner\"><path d=\"M16 32c-4.274 0-8.292-1.664-11.314-4.686S0 20.274 0 16c0-3.026.849-5.973 2.456-8.522a16.061 16.061 0 0 1 6.386-5.791l1.344 2.682a13.044 13.044 0 0 0-5.192 4.708A12.953 12.953 0 0 0 3 15.999c0 7.168 5.832 13 13 13s13-5.832 13-13c0-2.459-.69-4.853-1.994-6.922a13.051 13.051 0 0 0-5.192-4.708l1.344-2.682a16.047 16.047 0 0 1 6.386 5.791A15.953 15.953 0 0 1 32 16c0 4.274-1.664 8.292-4.686 11.314S20.274 32 16 32z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" id=\"RioniteFileUpload__iconTrash\"><path d=\"M4 10v20c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V10H4zm6 18H8V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14zM26.5 4H20V1.5c0-.825-.675-1.5-1.5-1.5h-7c-.825 0-1.5.675-1.5 1.5V4H3.5C2.675 4 2 4.675 2 5.5V8h26V5.5c0-.825-.675-1.5-1.5-1.5zM18 4h-6V2.025h6V4z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".RioniteFileUpload{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;min-width:400px;border:1px solid #ccc;color:#4d4d4d;font-size:1rem;line-height:1.5}.RioniteFileUpload .RioniteFileUpload__fileList{margin:0;padding:0;list-style:none}.RioniteFileUpload .RioniteFileUpload__file{position:relative;margin-bottom:10px;padding:12px 52px 12px 20px;border-radius:3px;background:#f2f2f2}.RioniteFileUpload .RioniteFileUpload__filePreviewWrapper{position:relative;display:inline-block;margin-right:10px;width:48px;height:48px;vertical-align:middle}.RioniteFileUpload .RioniteFileUpload__filePreview,.RioniteFileUpload .RioniteFileUpload__fileIcon,.RioniteFileUpload .RioniteFileUpload__fileLoadingIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto}.RioniteFileUpload .RioniteFileUpload__filePreview{max-width:48px;max-height:48px;border:0;border-radius:3px}.RioniteFileUpload .RioniteFileUpload__fileIcon{width:48px;height:48px;fill:currentColor}.RioniteFileUpload .RioniteFileUpload__fileLoadingIcon{width:20px;height:20px;-webkit-animation:RioniteFileUpload__fileLoadingIconAnimation 1.2s infinite linear;animation:RioniteFileUpload__fileLoadingIconAnimation 1.2s infinite linear;fill:currentColor}.RioniteFileUpload .RioniteFileUpload__fileText{vertical-align:middle;font-weight:700}.RioniteFileUpload .RioniteFileUpload__btnRemoveFile{position:absolute;top:0;right:10px;bottom:0;display:block;margin:auto;padding:10px;width:42px;height:42px;border:0;background:0 0;color:#999;cursor:pointer;-webkit-transition:color .1s;-o-transition:color .1s;transition:color .1s;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.RioniteFileUpload .RioniteFileUpload__btnRemoveFile:hover{color:#4d4d4d}.RioniteFileUpload .RioniteFileUpload__btnRemoveFile:active{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.RioniteFileUpload .RioniteFileUpload__btnRemoveFileIcon{display:block;width:22px;height:22px;fill:currentColor}.RioniteFileUpload .RioniteFileUpload__dropZone{position:relative;padding:25px;border:2px dashed #999;border-radius:5px;background:#f2f2f2;color:gray;text-align:center;cursor:pointer}.RioniteFileUpload .RioniteFileUpload__dropZone[over]{border-color:#168cf3}.RioniteFileUpload .RioniteFileUpload__dropZone[over] .RioniteFileUpload__drop-zone-text{pointer-events:none}.RioniteFileUpload .RioniteFileUpload__dropZone[error] .RioniteFileUpload__dropZoneErrorMessageWrapper{display:block}.RioniteFileUpload .RioniteFileUpload__dropZoneErrorMessageWrapper{position:absolute;top:0;right:0;bottom:0;left:0;display:none;border-radius:inherit;background:inherit;white-space:nowrap;font-size:0}.RioniteFileUpload .RioniteFileUpload__dropZoneErrorMessageWrapper::after{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.RioniteFileUpload .RioniteFileUpload__dropZoneErrorMessage{color:red;vertical-align:middle;font-size:1rem}.RioniteFileUpload .RioniteFileUpload__btnSelectFiles{display:inline;padding:0;border:0;background:0 0;color:#168cf3;font:inherit;cursor:inherit}.RioniteFileUpload .RioniteFileUpload__filesInput{display:none}@-webkit-keyframes RioniteFileUpload__fileLoadingIconAnimation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes RioniteFileUpload__fileLoadingIconAnimation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const next_uid_1 = __webpack_require__(12);
const cellx_1 = __webpack_require__(5);
const imageTypePrefix = 'image/';
class ReadableFile extends cellx_1.EventEmitter {
    constructor(file) {
        super();
        this.file = file;
        this.id = next_uid_1.nextUID();
        this.type = file.type;
        this.isImage = file.type.slice(0, imageTypePrefix.length) == imageTypePrefix;
        this.name = file.name;
        this.size = file.size;
        cellx_1.define(this, {
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
    _onReaderLoad(evt) {
        let binaryString = (this.binaryString = evt.target.result);
        this.dataURI = `data:${this.type};base64,${btoa(binaryString)}`;
        this.currentlyReading = false;
        this.readed = true;
    }
}
exports.ReadableFile = ReadableFile;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul:fileList {\n@Repeat (for=file in files, trackBy=id) {\nli:file {\ndiv:filePreviewWrapper {\n@IfThen (if=file.readed) {\n@IfThen (if=file.isImage) {\nimg:filePreview (_src={file.dataURI})\n}\n@IfElse (if=file.isImage) {\nsvg:fileIcon (viewBox=0 0 32 32) {\nuse (xlink:href=#RioniteFileUpload__iconFile)\n}\n}\n}\n@IfElse (if=file.readed) {\nsvg:fileLoadingIcon (viewBox=0 0 32 32) {\nuse (xlink:href=#RioniteFileUpload__iconSpinner)\n}\n}\n}\nspan:fileText {\n'{file.name}'\n}\nbutton:btnRemoveFile {\nsvg:btnRemoveFileIcon (viewBox=0 0 32 32) {\nuse (xlink:href=#RioniteFileUpload__iconTrash)\n}\n}\n}\n}\n}\ndiv:dropZone (error={error}) {\ndiv:dropZoneErrorMessageWrapper {\nspan:dropZoneErrorMessage {\n'{errorMessage}'\n}\n}\nspan:dropZoneText {\n'{\"Перетащите файлы в эту область или\" |t }'\nbr\nbutton:btnSelectFiles {\n'{\"нажмите для выбора в проводнике\" |t }'\n}\n}\n}\ninput:filesInput (type=file, multiple)");

/***/ })
/******/ ]);
});