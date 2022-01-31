import { Email } from "./email";
import { Password } from "./password";
import type { UserData } from "./user-data";

export class User {
    private constructor(
        private readonly email: Email,
        private readonly password: Password
    ) { }

    public static create(userData: UserData): User {
        const emailOrError: Email = Email.create(userData.email);
        const passwordOrError: Password = Password.create(userData.password);

        return new User(emailOrError, passwordOrError);
    }
}