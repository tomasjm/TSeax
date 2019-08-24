
import { MetadataKeys } from "../enum";
export function StatusCode(code: number) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.status_code, code, target, key);
    }
}