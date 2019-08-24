import { Controller, Use, Get} from "./decorators";
import { Request, Response, NextFunction } from "express";

@Controller("/")
class TestController {
    @Get("test")
    @Use(logger)
    @Use(logger2)
    @Use(logger3)
    Test() {
        return "hola mundo";
    }
}

function logger(req: Request, res: Response, next: NextFunction) {
    console.log(" MIDDLEWARE ");
    next();
}
function logger2(req: Request, res: Response, next: NextFunction) {
    console.log(" MIDDLEWARE 2");
    next();
}
function logger3(req: Request, res: Response, next: NextFunction) {
    console.log(" MIDDLEWARE 3");
    next();
}