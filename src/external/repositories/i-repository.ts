import type { RegisterUserData } from "../../usecase/register-user/register-user-dto";

export interface IRepository {
    getUserByEmail: (email: string | undefined) => RegisterUserData;
    register: (user: RegisterUserData) => RegisterUserData;
}