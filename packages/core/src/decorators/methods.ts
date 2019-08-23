import Methods from '../enum/methods';

function MethodBinder(method: Methods) {
    return function(path: string) {
        return function(target: any, key: string, desc: PropertyDescriptor) {
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