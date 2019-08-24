"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("../enum");
function StatusCode(code) {
    return function (target, key, desc) {
        Reflect.defineMetadata(enum_1.MetadataKeys.status_code, code, target, key);
    };
}
exports.StatusCode = StatusCode;
