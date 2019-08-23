import { Request, Response } from 'express';
import { Controller, Get, Post, Del, Put, Patch } from './core/decorators';
import { request } from 'https';

@Controller("/auth")
class AuthController {
    @Post("/login")
    login(req: Request, res: Response) {
        res.send({
            response: false,
            data: "No has podido loguear"
        })
    }
    @Del("/deleteuser")
    deleteUser(req: Request, res: Response) {
        res.send({
            response: true,
            data: "usuario eliminado"
        })
    }
}
export default new AuthController;