import express, { Router } from "express";


export class AppRouter {
    private static Router: Router;
    static getRouter(): Router {
        if (!AppRouter.Router) {
            AppRouter.Router = express.Router();
        }
        return AppRouter.Router;
    }

}