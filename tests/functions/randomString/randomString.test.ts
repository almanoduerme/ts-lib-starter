import { randomString } from "./randomString";

describe("randomString", () => {
  it("Generates a random string of the specified length", () => {
    const length = 10;
    const result = randomString(length);
    expect(result.length).toEqual(length);
  });

  it("Generates a string containing only uppercase letters, lowercase letters, and digits", () => {
    const length = 15;
    const result = randomString(length);
    const regex = /^[a-zA-Z0-9]+$/; // Only alphanumeric characters
    expect(regex.test(result)).toBe(true);
  });

  it("Generates different strings for different calls", () => {
    const length = 8;
    const result1 = randomString(length);
    const result2 = randomString(length);
    expect(result1).not.toEqual(result2);
  });

  it("Handles edge case: length equals 0", () => {
    const result = randomString(0);
    expect(result).toEqual("");
  });

  it("Handles edge case: length equals 1", () => {
    const result = randomString(1);
    expect(result.length).toEqual(1);
  });

  it("Handles edge case: length equals maximum (100)", () => {
    const result = randomString(100);
    expect(result.length).toEqual(100);
  });

  it("Handles invalid input: non-numeric length", () => {
    // @ts-ignore
    const result = randomString("not a number");
    expect(result).toEqual("");
  });

  it("Handles invalid input: negative length", () => {
    const result = randomString(-5);
    expect(result).toEqual("");
  });
});
