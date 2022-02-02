import type { InvalidEmailError } from "../../entities/user/errors/invalid-email";
import type { InvalidPasswordError } from "../../entities/user/errors/invalid-password";
import { User } from "../../entities/user/user";
import type { IRepository } from "../../external/repositories/i-repository";
import type { Either } from "../../shared/either";
import { right, left } from "../../shared/either";
import type { RegisterUserData } from "./register-user-dto";
import { UserExistsError } from "./erros/user-exists-error";

export class RegisterUserUsecase {
    public constructor(
        private readonly databaseProvider: IRepository
    ) { }

    public execute(data: RegisterUserData): Either<InvalidEmailError | InvalidPasswordError | UserExistsError, RegisterUserData> {
        const userOrError: Either<InvalidEmailError | InvalidPasswordError, User> = User.create(data);

        if (userOrError.isLeft()) return left(userOrError.value);

        const user: User = userOrError.value;

        const userOrUndefined = this.databaseProvider.getUserByEmail(user.email.value);

        if (userOrUndefined) return left(new UserExistsError(user.email.value));

        return right(this.databaseProvider.register({
            email: user.email.value,
            password: user.password.value,
        }));
    }
}