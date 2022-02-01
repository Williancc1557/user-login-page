import type { IDomainError } from "./domain-error";

export class UserNotExistsError extends Error implements IDomainError {
    public constructor(email: string) {
        super(`The user from '${email}' is invalid`);
        this.name = "InvalidEmailError";
    }
}