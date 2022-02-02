import { PostgresRepository } from "../../external/repositories/postgres/postgres-respository";
import { RegisterUserUsecase } from "./register-user-usecase";

jest.mock("../../external/repositories/postgres/postgres-respository");

const postgresRepositoryMock = PostgresRepository as jest.Mock<PostgresRepository>;

describe("register use usecase", () => {
    test("Should test if user was created", () => {
        const isUser = new RegisterUserUsecase(new postgresRepositoryMock()).execute({
            email: "mineg123123@gmail.com",
            password: "Willian123",
        }).isRight();

        expect(isUser).toBe(true);
    });

    test("Should not register a password that doesn't have uppercase chars", () => {
        const isUser = new RegisterUserUsecase(new postgresRepositoryMock()).execute({
            email: "mineg123123@gmail.com",
            password: "willian123",
        }).isLeft();

        expect(isUser).toBe(true);
    });

    test("Should not register new user with password of more 30 chars", () => {
        const isUser = new RegisterUserUsecase(new postgresRepositoryMock()).execute({
            email: "mineg123123@gmail.com",
            password: "Cc".repeat(30),
        }).isLeft();

        expect(isUser).toBe(true);
    });

    test("Should not register new user with empty email", () => {
        const isUser = new RegisterUserUsecase(new postgresRepositoryMock()).execute({
            email: "",
            password: "Willian123",
        }).isLeft();

        expect(isUser).toBe(true);
    });

    test("Should not register new user with undefined email", () => {
        const isUser = new RegisterUserUsecase(new postgresRepositoryMock()).execute({
            email: undefined,
            password: "Willian123",
        }).isLeft();

        expect(isUser).toBe(true);
    });

});
