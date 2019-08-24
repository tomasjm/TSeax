import "reflect-metadata";
import express, { Application, RequestHandler } from "express";
import cors from 'cors';
import {AppRouter} from './router';

export class TSeax {
    private app: Application;
    private port: Number;
    constructor(port: number, middlewares?: RequestHandler[]) {
        this.port = port;
        this.app = express();
        this.middlewares(middlewares);
        this.startServer();
    }
    private middlewares(middlewares?: RequestHandler[]) {
        if (middlewares) {
            for(let middleware of middlewares) {
                this.app.use(middleware);
            }
        }
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(AppRouter.getRouter());
    }
    private startServer() {
        this.app.listen(this.port, () => {
            console.log(`TSeax está andando en el puerto ${this.port}`);
        });
    }
}
