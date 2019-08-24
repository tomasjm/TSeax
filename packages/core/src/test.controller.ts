import { Controller, Use, Get} from "./decorators";
import { Request, Response, NextFunction } from "express";

@Controller("/")
class TestController {
    @Get("test")
    @Use([logger, second_logger])
    Test() {
        return "Your response!"
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
