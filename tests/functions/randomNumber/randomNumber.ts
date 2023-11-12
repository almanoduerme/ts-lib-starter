/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value of the random number (inclusive).
 * @param {number} max - The maximum value of the random number (inclusive).
 * @returns {number} - A random integer between min and max (inclusive).
 */
const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { randomNumber };
