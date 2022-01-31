import { isStrongPassword } from "@techmmunity/utils";
import { InvalidPasswordError } from "./errors/invalid-password";

export class Password {
    private constructor(
        private readonly password: string
    ) { }

    public static create(password: string): Password {
        if (!Password.validate(password)) new InvalidPasswordError(password);
        return new Password(password);
    }

    public static validate(password: string) {
        const isPasswordValidate: boolean = isStrongPassword(password);
        if (!isPasswordValidate) return false;
        return true;
    }
}