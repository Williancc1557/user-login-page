import { Password } from "./password";

describe("The password validator", () => {
    test("Should test a valid password", () => {
        expect(Password.validate("Willian123")).toBe(true);
    });

    test("Should test if password with 120 chars return false", () => {
        const password = "cC".repeat(120);
        expect(Password.validate(password)).toBe(false);
    });

    test("Should test if the password doesn't have uppercase char", () => {
        expect(Password.validate("willian123")).toBe(false);
    });

    test("Should test if the password have uppercase char", () => {
        expect(Password.validate("Willian123")).toBe(true);
    });
});