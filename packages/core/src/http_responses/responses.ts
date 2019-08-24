export class HttpResponseError {
    constructor(error: string) {
        return {
            response: false,
            error: true,
            error_message: error
        };
    }
}
export class HttpResponseOk {
    constructor(response: boolean, data: any) {
        return {
            response,
            error: false,
            data
        };
    }
}

export class HttpResponseCustom {
    constructor(response: object) {
        return response;
    }
}