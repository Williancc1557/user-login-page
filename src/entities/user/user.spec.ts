import { left } from "../../shared/either";
import { InvalidEmailError } from "./errors/invalid-email";
import { InvalidPasswordError } from "./errors/invalid-password";
import { User } from "./user";

describe("User domain entitie", () => {
    test("Should not create user with invalid email", () => {
        const email = "invalid-email";
        const password = "Willian123";
        expect(User.create({
            email,
            password,
        }))
            .toEqual(left(new InvalidEmailError(email)));
    });

    test("Should not create user with invalid password", () => {
        const email = "williancavalcanti@gmail.com";
        const password = "willian123";
        expect(User.create({
            email,
            password,
        }))
            .toEqual(left(new InvalidPasswordError(password)));
    });

});