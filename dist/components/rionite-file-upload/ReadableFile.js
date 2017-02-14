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
var cellx_1 = require("cellx");
var nextUID = cellx_1.Utils.nextUID;
var imageTypePrefix = 'image/';
var ReadableFile = (function (_super) {
    __extends(ReadableFile, _super);
    function ReadableFile(file) {
        var _this = _super.call(this) || this;
        _this._file = file;
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
        reader.readAsBinaryString(this._file);
    };
    ReadableFile.prototype._onReaderLoad = function (evt) {
        var binaryString = this.binaryString = evt.target['result'];
        this.dataURI = "data:" + this.type + ";base64," + btoa(binaryString);
        this.currentlyReading = false;
        this.readed = true;
    };
    return ReadableFile;
}(cellx_1.EventEmitter));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReadableFile;
