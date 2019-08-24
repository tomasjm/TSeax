"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpResponseError = /** @class */ (function () {
    function HttpResponseError(error) {
        return {
            response: false,
            error: true,
            error_message: error
        };
    }
    return HttpResponseError;
}());
exports.HttpResponseError = HttpResponseError;
var HttpResponseOk = /** @class */ (function () {
    function HttpResponseOk(response, data) {
        return {
            response: response,
            error: false,
            data: data
        };
    }
    return HttpResponseOk;
}());
exports.HttpResponseOk = HttpResponseOk;
var HttpResponseCustom = /** @class */ (function () {
    function HttpResponseCustom(response) {
        return response;
    }
    return HttpResponseCustom;
}());
exports.HttpResponseCustom = HttpResponseCustom;
