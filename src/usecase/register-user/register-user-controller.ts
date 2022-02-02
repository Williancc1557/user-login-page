import type { Request, Response } from "express";
import type { RegisterUserUsecase } from "./register-user-usecase";

export class RegisterUserController {
    public constructor(
        private readonly registerUserUsecase: RegisterUserUsecase
    ) { }

    public handle(req: Request, res: Response): Response {
        const { email, password } = req.body;

        const userOrError = this.registerUserUsecase.execute({ email, password });

        const errorCode = 400;
        if (userOrError.isLeft()) return res.status(errorCode).json(userOrError.value);
        return res.json(userOrError);

    }
}