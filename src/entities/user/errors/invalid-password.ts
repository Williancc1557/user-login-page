import type { IDomainError } from "./domain-error";

export class InvalidPasswordError extends Error implements IDomainError {
    public constructor(password: string) {
        super(`The password "${password}" is invalid`);
        this.name = "InvalidPasswordError";
    }
}