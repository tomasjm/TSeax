"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = require("./router");
var TSeax = /** @class */ (function () {
    function TSeax(port) {
        this.port = port;
        this.app = express_1.default();
        this.middlewares();
        this.startServer();
    }
    TSeax.prototype.middlewares = function () {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(router_1.AppRouter.getRouter());
    };
    TSeax.prototype.startServer = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("TSeax est\u00E1 andando en el puerto " + _this.port);
        });
    };
    return TSeax;
}());
exports.TSeax = TSeax;
