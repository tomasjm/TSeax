export interface ResponseInterface {
    options: {
        sendFile?: boolean
    },
    data: any
}
export class HttpResponseError  {
    constructor(error: string) {
        let frmResponse: ResponseInterface = {
            options: {},
            data: {
                response: false,
                error: true,
                error_message: error
            }
        }
        return frmResponse;
    }
}
export class HttpResponseOk {
    constructor(response: boolean, data: any) {
        let frmResponse: ResponseInterface = {
            options: {},
            data: {
                response,
                error: false,
                data
            }
        }
        return frmResponse;
    }
}
export class HttpResponseFile {
    constructor(response: boolean, data: any) {
        let frmResponse: ResponseInterface = {
            options: {
                sendFile: true
            },
            data
        }
        return frmResponse;
    }
}

export class HttpResponseCustom {
    constructor(response: object) {
        return response;
    }
}