import { Password } from "./password";

describe("The password validator", () => {
    test("Should accept a valid password", () => {
        expect(Password.validate("Willian123")).toBe(true);
    });

    test("Should not accept a password with more 30 chars", () => {
        const password = "cC".repeat(120);
        expect(Password.validate(password)).toBe(false);
    });

    test("Should not accept a password that doesn't have uppercase chars", () => {
        expect(Password.validate("willian123")).toBe(false);
    });

    test("This titles in this tests password-validator.spec.ts file was updated", () => {
        expect(Password.validate("Willian123")).toBe(true);
    });
});