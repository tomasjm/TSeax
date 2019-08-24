import {Methods} from '../enum/methods';
import { Request, Response, response } from 'express';
import { ResponseInterface } from '../http_responses';
function MethodBinder(method: Methods, ...args: any[]) {
    return function(path: string) {
        return function(target: any, key: string, desc: PropertyDescriptor) {
            const res_code: number = Reflect.getMetadata('status_code', target, key) || 200;
            const fc = desc.value;
            const response_options: ResponseInterface | any = fc();
            desc.value = (req: Request, res: Response) => {
                if (response_options.data) {
                    if(response_options.options.sendFile) {
                        res.status(res_code).sendFile(response_options.data);
                    } else {
                        res.status(res_code).send(response_options.data);
                    }
                } else {
                    throw new Error("Error al enviar la respuesta, no se ha utilizado un formato adecuado");
                }
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