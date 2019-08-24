"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("../enum");
function ResponseStatus(status) {
    return function (target, key, desc) {
        Reflect.defineMetadata(enum_1.MetadataKeys.response_status, status, target, key);
    };
}
exports.ResponseStatus = ResponseStatus;
