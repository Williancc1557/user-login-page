import { isEmail } from "@techmmunity/utils";
import { InvalidEmailError } from "./errors/invalid-email";

export class Email {
    private constructor(
        private readonly email: string,
    ) { }

    public static create(email: string) {
        if (!Email.validate(email)) new InvalidEmailError(email);
        return new Email(email);
    }

    public static validate(email: string): boolean {
        const isEmailValid = isEmail(email);

        if (!isEmailValid) return false;

        return true;
    }
}