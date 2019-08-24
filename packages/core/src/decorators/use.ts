import { RequestHandler } from "express";
import { MetadataKeys } from "../enum";

export function Use(middlewares: RequestHandler[]) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        //const middlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target, key) || [];
        //console.log(middlewares);
        Reflect.defineMetadata(MetadataKeys.middlewares, [...middlewares], target, key);
    }
}