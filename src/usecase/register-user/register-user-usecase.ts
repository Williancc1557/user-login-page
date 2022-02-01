import type { IRepository } from "../../external/repositories/i-repository";

export class RegisterUserUsecase {
    public constructor(
        private readonly databaseProvider: IRepository
    ) { }
}