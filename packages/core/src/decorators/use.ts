import { RequestHandler } from "express";
import { MetadataKeys } from "../enum";

export function Use(middleware: RequestHandler) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        const middlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target, key) || [];
        Reflect.defineMetadata(MetadataKeys.middlewares, [...middlewares, middleware], target, key);
    }
}