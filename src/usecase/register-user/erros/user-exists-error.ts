import type { IDomainError } from "./domain-error";

export class UserExistsError extends Error implements IDomainError {
    public constructor(email: string) {
        super(`Already exists account with email = '${email}'`);
        this.name = "AlreadyExistsEmailError";
    }
}