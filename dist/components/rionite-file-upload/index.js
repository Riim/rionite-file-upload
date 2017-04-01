(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("cellx-indexed-collections"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "cellx-indexed-collections", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["rionite-file-upload"] = factory(require("cellx"), require("cellx-indexed-collections"), require("rionite"));
	else
		root["rionite-file-upload"] = factory(root["cellx"], root["cellx-indexed-collections"], root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(0);
var nextUID = cellx_1.Utils.nextUID;
var imageTypePrefix = 'image/';
var ReadableFile = (function (_super) {
    __extends(ReadableFile, _super);
    function ReadableFile(file) {
        var _this = _super.call(this) || this;
        _this.file = file;
        _this.id = nextUID();
        _this.type = file.type;
        _this.isImage = file.type.slice(0, imageTypePrefix.length) == imageTypePrefix;
        _this.name = file.name;
        _this.size = file.size;
        _this.lastModifiedDate = file.lastModifiedDate.toLocaleDateString();
        cellx_1.define(_this, {
            currentlyReading: false,
            readed: false
        });
        return _this;
    }
    ReadableFile.prototype.read = function () {
        var reader = this.reader = new FileReader();
        reader.addEventListener('load', this._onReaderLoad.bind(this));
        this.currentlyReading = true;
        reader.readAsBinaryString(this.file);
    };
    ReadableFile.prototype._onReaderLoad = function (evt) {
        var binaryString = this.binaryString = evt.target['result'];
        this.dataURI = "data:" + this.type + ";base64," + btoa(binaryString);
        this.currentlyReading = false;
        this.readed = true;
    };
    return ReadableFile;
}(cellx_1.EventEmitter));
exports.default = ReadableFile;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
exports.default = escapeRegExp;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "ul/file-list {\ntemplate (is=rt-repeat, for=file of files, track-by=id) {\nli/file {\ndiv/file-preview-wrapper {\ntemplate (is=rt-if-then, if=file.readed) {\ntemplate (is=rt-if-then, if=file.isImage) {\nimg/file-preview (_src={file.dataURI})\n}\ntemplate (is=rt-if-else, if=file.isImage) {\nsvg/file-icon (viewBox=0 0 32 32) { use (xlink:href=#rionite-file-upload__icon-file) }\n}\n}\ntemplate (is=rt-if-else, if=file.readed) {\nsvg/file-loading-icon (viewBox=0 0 32 32) { use (xlink:href=#rionite-file-upload__icon-spinner) }\n}\n}\nspan/file-text { '{file.name}' }\nbutton/btn-remove-file (data-file-id={file.id}, rt-click=_onBtnRemoveFileClick) {\nsvg/btn-remove-file-icon (viewBox=0 0 32 32) { use (xlink:href=#rionite-file-upload__icon-trash) }\n}\n}\n}\n}\ninput/files-input (type=file, multiple)\ndiv/drop-zone (error={error}) {\ndiv/drop-zone-error-message-wrapper {\nspan/drop-zone-error-message { '{errorMessage}' }\n}\nspan/drop-zone-text {\n'{constructor.i18n.dropFilesHereOr}' br\nbutton/btn-select-files { '{constructor.i18n.btnSelectFilesText}' }\n}\n}"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".rionite-file-upload{display:block;box-sizing:border-box;padding:12px;min-width:400px;border:1px solid #ccc;color:#4d4d4d;font-size:1rem;line-height:1.5}.rionite-file-upload .rionite-file-upload__file-list{margin:0;padding:0;list-style:none}.rionite-file-upload .rionite-file-upload__file{position:relative;margin-bottom:10px;padding:12px 52px 12px 20px;border-radius:3px;background:#f2f2f2}.rionite-file-upload .rionite-file-upload__file-preview-wrapper{position:relative;display:inline-block;margin-right:10px;width:48px;height:48px;vertical-align:middle}.rionite-file-upload .rionite-file-upload__file-preview,.rionite-file-upload .rionite-file-upload__file-icon,.rionite-file-upload .rionite-file-upload__file-loading-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto}.rionite-file-upload .rionite-file-upload__file-preview{max-width:48px;max-height:48px;border:0;border-radius:3px}.rionite-file-upload .rionite-file-upload__file-icon{width:48px;height:48px;fill:currentColor}.rionite-file-upload .rionite-file-upload__file-loading-icon{width:20px;height:20px;animation:rionite-file-upload__file-loading-icon-animation 1.2s infinite linear;fill:currentColor}.rionite-file-upload .rionite-file-upload__file-text{vertical-align:middle;font-weight:700}.rionite-file-upload .rionite-file-upload__btn-remove-file{position:absolute;top:0;right:10px;bottom:0;display:block;margin:auto;padding:10px;width:42px;height:42px;border:0;background:0 0;cursor:pointer;-ms-transform:translateY(-1px);transform:translateY(-1px)}.rionite-file-upload .rionite-file-upload__btn-remove-file-icon{display:block;width:22px;height:22px;transition:fill .1s;fill:#999}.rionite-file-upload .rionite-file-upload__btn-remove-file:hover .rionite-file-upload__btn-remove-file-icon{fill:#4d4d4d}.rionite-file-upload .rionite-file-upload__btn-remove-file:active{-ms-transform:translateY(0);transform:translateY(0)}.rionite-file-upload .rionite-file-upload__files-input{display:none}.rionite-file-upload .rionite-file-upload__drop-zone{position:relative;padding:25px;border:2px dashed #999;border-radius:5px;background:#f2f2f2;color:gray;text-align:center;cursor:pointer}.rionite-file-upload .rionite-file-upload__drop-zone-error-message-wrapper{position:absolute;top:0;right:0;bottom:0;left:0;display:none;border-radius:inherit;background:inherit;white-space:nowrap;font-size:0}.rionite-file-upload .rionite-file-upload__drop-zone-error-message-wrapper::after{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.rionite-file-upload .rionite-file-upload__drop-zone-error-message{color:red;vertical-align:middle;font-size:1rem}.rionite-file-upload .rionite-file-upload__btn-select-files{display:inline;padding:0;border:0;background:0 0;color:#168cf3;font:inherit;cursor:inherit}.rionite-file-upload .rionite-file-upload__drop-zone[over]{border-color:#168cf3}.rionite-file-upload .rionite-file-upload__drop-zone[over] .rionite-file-upload__drop-zone-text{pointer-events:none}.rionite-file-upload .rionite-file-upload__drop-zone[error] .rionite-file-upload__drop-zone-error-message-wrapper{display:block}@keyframes rionite-file-upload__file-loading-icon-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"rionite-file-upload__icon-file\"><path d=\"M28.681 7.159c-.694-.947-1.662-2.053-2.724-3.116s-2.169-2.03-3.116-2.724C21.229.137 20.448 0 20 0H4.5A2.503 2.503 0 0 0 2 2.5v27C2 30.878 3.122 32 4.5 32h23c1.378 0 2.5-1.122 2.5-2.5V10c0-.448-.137-1.23-1.319-2.841zm-4.138-1.702A27.334 27.334 0 0 1 26.811 8H22V3.189a27.334 27.334 0 0 1 2.543 2.268zM28 29.5c0 .271-.229.5-.5.5h-23a.507.507 0 0 1-.5-.5v-27c0-.271.229-.5.5-.5H20v7a1 1 0 0 0 1 1h7v19.5z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"rionite-file-upload__icon-spinner\"><path d=\"M16 32c-4.274 0-8.292-1.664-11.314-4.686S0 20.274 0 16c0-3.026.849-5.973 2.456-8.522a16.061 16.061 0 0 1 6.386-5.791l1.344 2.682a13.044 13.044 0 0 0-5.192 4.708A12.953 12.953 0 0 0 3 15.999c0 7.168 5.832 13 13 13s13-5.832 13-13c0-2.459-.69-4.853-1.994-6.922a13.051 13.051 0 0 0-5.192-4.708l1.344-2.682a16.047 16.047 0 0 1 6.386 5.791A15.953 15.953 0 0 1 32 16c0 4.274-1.664 8.292-4.686 11.314S20.274 32 16 32z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"rionite-file-upload__icon-trash\"><path d=\"M4 10v20c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V10H4zm6 18H8V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14z\" xmlns=\"http://www.w3.org/2000/svg\"/><path d=\"M26.5 4H20V1.5c0-.825-.675-1.5-1.5-1.5h-7c-.825 0-1.5.675-1.5 1.5V4H3.5C2.675 4 2 4.675 2 5.5V8h26V5.5c0-.825-.675-1.5-1.5-1.5zM18 4h-6V2.025h6V4z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(6);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(4);
var cellx_1 = __webpack_require__(0);
var cellx_indexed_collections_1 = __webpack_require__(8);
var rionite_1 = __webpack_require__(9);
var ReadableFile_1 = __webpack_require__(1);
var escapeRegExp_1 = __webpack_require__(2);
var template = __webpack_require__(3);
var i18n = {
    dropFilesHereOr: rionite_1.getText.t('Перетащите файлы в эту область или'),
    btnSelectFilesText: rionite_1.getText.t('нажмите для выбора в проводнике'),
    typeErrorMessage: rionite_1.getText.t('Файл не подходит по типу'),
    sizeErrorMessage: rionite_1.getText.t('Файл слишком большой'),
    totalSizeErrorMessage: rionite_1.getText.t('Превышен лимит суммарного размера файлов')
};
var RioniteFileUpload = (function (_super) {
    __extends(RioniteFileUpload, _super);
    function RioniteFileUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._size = 0;
        return _this;
    }
    RioniteFileUpload.prototype.initialize = function () {
        this.files = new cellx_indexed_collections_1.IndexedList();
        var typePattern = this.props['typePattern'];
        if (typePattern) {
            this._reFileType = RegExp("^" + escapeRegExp_1.default(typePattern).split('\\*').join('.*') + "$");
        }
        cellx_1.define(this, {
            errorMessage: null,
            error: false
        });
    };
    RioniteFileUpload.prototype._onBtnRemoveFileClick = function (evt, btn) {
        var file = this.files.get(btn.dataset['fileId'], 'id');
        this._size -= file.size;
        this.files.remove(file);
    };
    RioniteFileUpload.prototype._addFiles = function (files) {
        var sizeLimit = this.props['sizeLimit'];
        var totalSizeLimit = this.props['totalSizeLimit'];
        var reFileType = this._reFileType;
        var size = this._size;
        var errorMessage;
        for (var i = 0, l = files.length; i < l; i++) {
            var file = files[i];
            size += file.size;
            if (reFileType && !reFileType.test(file.type)) {
                errorMessage = i18n.typeErrorMessage;
            }
            else if (sizeLimit && file.size > sizeLimit) {
                errorMessage = i18n.sizeErrorMessage;
            }
            else if (totalSizeLimit && size > totalSizeLimit) {
                errorMessage = i18n.totalSizeErrorMessage;
            }
            if (errorMessage) {
                this.errorMessage = errorMessage;
                this.error = true;
                break;
            }
        }
        if (!errorMessage) {
            this._size = size;
            for (var i = 0, l = files.length; i < l; i++) {
                var readableFile = new ReadableFile_1.default(files[i]);
                readableFile.read();
                this.files.add(readableFile);
            }
        }
    };
    return RioniteFileUpload;
}(rionite_1.Component));
RioniteFileUpload = __decorate([
    rionite_1.d.Component({
        elementIs: 'rionite-file-upload',
        props: {
            typePattern: { type: String, readonly: true },
            sizeLimit: Number,
            totalSizeLimit: Number
        },
        i18n: i18n,
        bemlTemplate: template,
        events: {
            'files-input': {
                change: function (evt) {
                    this._addFiles(evt.target['files']);
                }
            },
            'drop-zone': {
                dragenter: function (evt) {
                    this.error = false;
                    evt.target.setAttribute('over', '');
                },
                dragover: function (evt) {
                    evt.preventDefault();
                    evt.dataTransfer.dropEffect = 'copy';
                },
                dragleave: function (evt) {
                    evt.target.removeAttribute('over');
                },
                drop: function (evt) {
                    evt.preventDefault();
                    evt.target.removeAttribute('over');
                    this._addFiles(evt.dataTransfer.files);
                },
                click: function () {
                    if (this.error) {
                        this.error = false;
                    }
                    else {
                        this.$('files-input').click();
                    }
                }
            }
        }
    })
], RioniteFileUpload);
exports.default = RioniteFileUpload;


/***/ })
/******/ ]);
});