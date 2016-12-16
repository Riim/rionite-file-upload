"use strict";
var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = escapeRegExp;
