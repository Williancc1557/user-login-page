import type { User } from "../../entities/user/user";
import type { Either } from "../../shared/either";
import type { IRegisterUserDTO } from "../../usecase/register-user/register-user-dto";
import type { UserNotExistsError } from "./erros/user-not-exists-error";

export interface IRepository {
    exists: (email: string) => Either<UserNotExistsError, User>;
    register: (user: IRegisterUserDTO) => User;
}