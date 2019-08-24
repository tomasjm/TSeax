import {Methods} from '../enum/methods';
import { Request, Response } from 'express';
function MethodBinder(method: Methods, ...args: any[]) {
    return function(path: string) {
        return function(target: any, key: string, desc: PropertyDescriptor) {
            const res_code: number = Reflect.getMetadata('status_code', target, key) || 200;
            const fc = desc.value;
            desc.value = (req: Request, res: Response) => {
                res.status(res_code).send(fc());
            }
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

export const Get = MethodBinder(Methods.get);
export const Post = MethodBinder(Methods.post);
export const Del = MethodBinder(Methods.delete);
export const Put = MethodBinder(Methods.put);
export const Patch = MethodBinder(Methods.patch);