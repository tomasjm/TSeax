import {Methods} from "../enum";
import {AppRouter} from "../router";
import { MetadataKeys } from "../enum";
import { Router, RequestHandler, Request, Response } from "express";
export function Controller(prefix: string, ...args: any[]) {
    return function(target: Function) {
        console.log(`Controlador | ${target.prototype.constructor.name}  "${prefix}"`);
        for (let key in target.prototype) {
            const router: Router = AppRouter.getRouter();
            const routeFunction: RequestHandler = target.prototype[key];
            const path: string = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const middlewares: RequestHandler[] = Reflect.getMetadata(MetadataKeys.middlewares, target.prototype, key) || [];
            if (path) {
                if (prefix === "/") {
                    console.log(`Ruta añadida | ${method.toUpperCase()} "${prefix}${path}"`);
                    router[method](`${prefix}${path}`, ...middlewares, routeFunction);
                } else {
                    console.log(`Ruta añadida | ${method.toUpperCase()} "${prefix}${path}"`);
                    router[method](`${prefix}/${path}`, ...middlewares, routeFunction);
                }
                
            }
        }
    }
}