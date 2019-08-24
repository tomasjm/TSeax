"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("../enum");
function Use(middlewares) {
    return function (target, key, desc) {
        //const middlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target, key) || [];
        //console.log(middlewares);
        Reflect.defineMetadata(enum_1.MetadataKeys.middlewares, middlewares.slice(), target, key);
    };
}
exports.Use = Use;
