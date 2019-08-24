import { Controller, Use, Get} from "./decorators";
import { Request, Response, NextFunction } from "express";
import { HttpResponseOk } from './http_responses';


@Controller("/")
class TestController {
    @Get("test")
    @Use([logger, second_logger])
    Test() {
        return new HttpResponseOk(true, { message: "hola mundo"})
    }
}

function logger(req: Request, res: Response, next: NextFunction) {
    console.log(" MIDDLEWARE ");
    next();
}
function second_logger(req: Request, res: Response, next: NextFunction) {
    console.log(" MIDDLEWARE 2");
    next();
}
