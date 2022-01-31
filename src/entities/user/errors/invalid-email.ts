import type { IDomainError } from "./domain-error";

export class InvalidEmailError extends Error implements IDomainError {
    public constructor(email: string) {
        super(`The email "${email}" is invalid`);
        this.name = "InvalidEmailError";
    }
}