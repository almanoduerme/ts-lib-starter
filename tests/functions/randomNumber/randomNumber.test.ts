import { randomNumber } from "./randomNumber";

describe("randomNumber", () => {
  it("Generates a random integer between the specified minimum and maximum values (inclusive).", () => {
    const min = 0;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
    expect(Number.isInteger(result)).toBe(true);
  });

  it("Handles edge case: minimum value equals 0", () => {
    const min = 0;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
  });

  it("Handles edge case: maximum value equals 100", () => {
    const min = 0;
    const max = 100;
    const result = randomNumber(min, max);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("Handles edge case: minimum equals maximum", () => {
    const min = 42;
    const max = 42;
    const result = randomNumber(min, max);
    expect(result).toEqual(min);
  });

  it("Ensures repeatability: multiple calls with the same parameters produce different results", () => {
    const min = 0;
    const max = 10;
    const result1 = randomNumber(min, max);
    const result2 = randomNumber(min, max);
    expect(result1).not.toEqual(result2);
  });

  it("Handles invalid input: non-numeric values for min and max", () => {
    const min = "not a number";
    const max = "another string";
    // @ts-ignore
    const result = randomNumber(min, max);
    expect(result).toBeNaN();
  });

  it("Executes in a reasonable time for a large number of random values", () => {
    const min = 0;
    const max = 100;
    const numberOfValues = 1000;
    const startTime = performance.now();
    for (let i = 0; i < numberOfValues; i++) {
      randomNumber(min, max);
    }
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    expect(executionTime).toBeLessThan(100);
  });
});
