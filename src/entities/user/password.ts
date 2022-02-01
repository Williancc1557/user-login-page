import type { Either } from "../../shared/either";
import { right, left } from "../../shared/either";
import { InvalidPasswordError } from "./errors/invalid-password";

export class Password {
    private constructor(
        private readonly password: string
    ) { }

    public static create(password: string): Either<InvalidPasswordError, Password> {
        if (!Password.validate(password)) return left(new InvalidPasswordError(password));
        return right(new Password(password));
    }

    public static validate(password: string) {
        const maxPasswordLength = 30;
        const minPasswordLength = 8;
        const upperCaseCheck = /[A-Z]/;

        if (password.length > maxPasswordLength) return false;
        if (password.length < minPasswordLength) return false;
        if (!password.match(upperCaseCheck)) return false;


        return true;
    }
}