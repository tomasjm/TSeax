"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getRouter = function () {
        if (!AppRouter.Router) {
            AppRouter.Router = express_1.default.Router();
        }
        return AppRouter.Router;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
