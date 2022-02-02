import type { RegisterUserData } from "../../../usecase/register-user/register-user-dto";
import type { IRepository } from "../i-repository";

export class PostgresRepository implements IRepository {
    public constructor(
        private readonly database: Array<RegisterUserData> = []
    ) { }

    public getUserByEmail(email: string): RegisterUserData | undefined {
        const userOrUndefined = this.database.find(user => user.email === email);
        return userOrUndefined;
    }

    public register(user: RegisterUserData): RegisterUserData {
        this.database.push(user);
        return user;
    }
}