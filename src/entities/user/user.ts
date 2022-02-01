import type { Either } from "../../shared/either";
import { right, left } from "../../shared/either";
import { Email } from "./email";
import type { InvalidEmailError } from "./errors/invalid-email";
import type { InvalidPasswordError } from "./errors/invalid-password";
import { Password } from "./password";
import type { UserData } from "./user-data";

export class User {
    private constructor(
        private readonly email: Email,
        private readonly password: Password
    ) { }

    public static create(userData: UserData): Either<InvalidEmailError | InvalidPasswordError, User> {
        const emailOrError: Either<InvalidEmailError, Email> = Email.create(userData.email);
        const passwordOrError: Either<InvalidPasswordError, Password> = Password.create(userData.password);

        if (emailOrError.isLeft()) return left(emailOrError.value);
        if (passwordOrError.isLeft()) return left(passwordOrError.value);

        const email = emailOrError.value;
        const password = passwordOrError.value;

        return right(new User(email, password));

    }
}