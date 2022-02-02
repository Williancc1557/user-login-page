import { isEmail } from "@techmmunity/utils";
import type { Either } from "../../shared/either";
import { left, right } from "../../shared/either";
import { InvalidEmailError } from "./errors/invalid-email";

export class Email {
    private constructor(
        private readonly email: string,
    ) { }

    public static create(email: string): Either<InvalidEmailError, Email> {
        if (!Email.validate(email)) return left(new InvalidEmailError(email));
        return right(new Email(email));
    }

    public get value(): string {
        return this.email;
    }

    public static validate(email: string): boolean {
        const isEmailValid = isEmail(email);

        if (!isEmailValid) return false;

        const [emailBeforeSimbol, emailAfterSimbol] = email.split("@");

        const maxLengthEmailBeforeSimbol = 64;
        const maxLengthEmailAfterSimbol = 255;

        if (emailBeforeSimbol.length > maxLengthEmailBeforeSimbol) return false;
        if (emailAfterSimbol.length > maxLengthEmailAfterSimbol) return false;

        return true;
    }
}