import type { InvalidEmailError } from "../../entities/user/errors/invalid-email";
import type { InvalidPasswordError } from "../../entities/user/errors/invalid-password";
import { User } from "../../entities/user/user";
import type { IRepository } from "../../external/repositories/i-repository";
import type { Either } from "../../shared/either";
import { right, left } from "../../shared/either";
import type { IRegisterUserDTO } from "./register-user-dto";

export class RegisterUserUsecase {
    public constructor(
        private readonly databaseProvider: IRepository
    ) { }

    public execute(data: IRegisterUserDTO): Either<InvalidEmailError | InvalidPasswordError, User> {
        this.databaseProvider.exists(data.email);

        const userOrError: Either<InvalidEmailError | InvalidPasswordError, User> = User.create(data);

        if (userOrError.isLeft()) return left(userOrError.value);

        const user = userOrError.value;

        return right(this.databaseProvider.register(user));
    }
}