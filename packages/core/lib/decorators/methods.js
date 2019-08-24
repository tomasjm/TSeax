"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = require("../enum/methods");
function MethodBinder(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (path) {
        return function (target, key, desc) {
            var res_code = Reflect.getMetadata('status_code', target, key) || 200;
            var fc = desc.value;
            var response_options = fc();
            desc.value = function (req, res) {
                if (response_options.data) {
                    if (response_options.options.sendFile) {
                        res.status(res_code).sendFile(response_options.data);
                    }
                    else {
                        res.status(res_code).send(response_options.data);
                    }
                }
                else {
                    throw new Error("Error al enviar la respuesta, no se ha utilizado un formato adecuado");
                }
            };
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
