"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var http_responses_1 = require("./http_responses");
var TestController = /** @class */ (function () {
    function TestController() {
    }
    TestController.prototype.Test = function () {
        return new http_responses_1.HttpResponseOk(true, { message: "hola mundo" });
    };
    __decorate([
        decorators_1.Get("test"),
        decorators_1.Use([logger, second_logger]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestController.prototype, "Test", null);
    TestController = __decorate([
        decorators_1.Controller("/")
    ], TestController);
    return TestController;
}());
function logger(req, res, next) {
    console.log(" MIDDLEWARE ");
    next();
}
function second_logger(req, res, next) {
    console.log(" MIDDLEWARE 2");
    next();
}
