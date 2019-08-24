"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = require("../enum/methods");
function MethodBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.Get = MethodBinder(methods_1.Methods.get);
exports.Post = MethodBinder(methods_1.Methods.post);
exports.Del = MethodBinder(methods_1.Methods.delete);
exports.Put = MethodBinder(methods_1.Methods.put);
exports.Patch = MethodBinder(methods_1.Methods.patch);
