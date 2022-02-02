import type { Request, Response, Router } from "express";
import { registerUserController } from "../../usecase/register-user";


export default (router: Router): void => {
    router.post("/register", (req: Request, res: Response) => {
        registerUserController.handle(req, res);
    });
};