"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpResponseError = /** @class */ (function () {
    function HttpResponseError(error) {
        var frmResponse = {
            options: {},
            data: {
                response: false,
                error: true,
                error_message: error
            }
        };
        return frmResponse;
    }
    return HttpResponseError;
}());
exports.HttpResponseError = HttpResponseError;
var HttpResponseOk = /** @class */ (function () {
    function HttpResponseOk(response, data) {
        var frmResponse = {
            options: {},
            data: {
                response: response,
                error: false,
                data: data
            }
        };
        return frmResponse;
    }
    return HttpResponseOk;
}());
exports.HttpResponseOk = HttpResponseOk;
var HttpResponseFile = /** @class */ (function () {
    function HttpResponseFile(response, data) {
        var frmResponse = {
            options: {
                sendFile: true
            },
            data: data
        };
        return frmResponse;
    }
    return HttpResponseFile;
}());
exports.HttpResponseFile = HttpResponseFile;
var HttpResponseCustom = /** @class */ (function () {
    function HttpResponseCustom(response) {
        return response;
    }
    return HttpResponseCustom;
}());
exports.HttpResponseCustom = HttpResponseCustom;
