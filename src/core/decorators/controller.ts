import Methods from "../enum/methods";
import AppRouter from "../router";
export function Controller(prefix: string) {
    return function(target: Function) {
        console.log(`Controlador | ${target.prototype.constructor.name}  "${prefix}"`);
        for (let key in target.prototype) {
            const router = AppRouter.getRouter();
            const routeFunction = target.prototype[key];
            const path: string = Reflect.getMetadata('path', target.prototype, key);
            const method: Methods = Reflect.getMetadata('method', target.prototype, key);

            if (path) {
                console.log(`Ruta añadida | ${method.toUpperCase()} "${prefix}${path}"`);
                router[method](`${prefix}${path}`, routeFunction);
            }
        }
    }
}