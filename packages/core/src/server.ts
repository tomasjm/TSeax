import "reflect-metadata";
import express, { Application } from "express";
import cors from 'cors';
import AppRouter from './router';

export default class TSeax {
    private app: Application;
    private port: Number;
    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.middlewares();
        this.startServer();
    }
    private middlewares() {
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