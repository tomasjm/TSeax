"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../router");
function Controller(prefix) {
    return function (target) {
        console.log("Controlador | " + target.prototype.constructor.name + "  \"" + prefix + "\"");
        for (var key in target.prototype) {
            var router = router_1.AppRouter.getRouter();
            var routeFunction = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            if (path) {
                console.log("Ruta a\u00F1adida | " + method.toUpperCase() + " \"" + prefix + path + "\"");
                router[method]("" + prefix + path, routeFunction);
            }
        }
    };
}
exports.Controller = Controller;
