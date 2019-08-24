"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../router");
var enum_1 = require("../enum");
function Controller(prefix) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (target) {
        console.log("Controlador | " + target.prototype.constructor.name + "  \"" + prefix + "\"");
        for (var key in target.prototype) {
            var router = router_1.AppRouter.getRouter();
            var routeFunction = target.prototype[key];
            var path = Reflect.getMetadata(enum_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(enum_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(enum_1.MetadataKeys.middlewares, target.prototype, key) || [];
            if (path) {
                if (prefix === "/") {
                    console.log("Ruta a\u00F1adida | " + method.toUpperCase() + " \"" + prefix + path + "\"");
                    router[method].apply(router, ["" + prefix + path].concat(middlewares, [routeFunction]));
                }
                else {
                    console.log("Ruta a\u00F1adida | " + method.toUpperCase() + " \"" + prefix + path + "\"");
                    router[method].apply(router, [prefix + "/" + path].concat(middlewares, [routeFunction]));
                }
            }
        }
    };
}
exports.Controller = Controller;
