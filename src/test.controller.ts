import { Controller, Get } from './core/decorators';
import { Request, Response } from 'express';
@Controller("/api")
class TestController {
    @Get("/test")
    logger(req: Request, res: Response) {
        return res.send({
            response: true,
            data: "Ha funcionado!"
        });
    }
}

export default new TestController();