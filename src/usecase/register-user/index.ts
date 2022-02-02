import { PostgresRepository } from "../../external/repositories/postgres/postgres-respository";
import { RegisterUserController } from "./register-user-controller";
import { RegisterUserUsecase } from "./register-user-usecase";

const postgresRepository = new PostgresRepository();

const registerUserUsecase = new RegisterUserUsecase(postgresRepository);

export const registerUserController = new RegisterUserController(registerUserUsecase);