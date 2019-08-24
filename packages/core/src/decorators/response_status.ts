
import { MetadataKeys } from "../enum";
export function ResponseStatus(status: boolean) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.response_status, status, target, key);
    }
}