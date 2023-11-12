import { randomNumber } from "../randomNumber/randomNumber";

/**
 * Generates a random string of the specified length, composed of uppercase and lowercase letters,
 * and digits (alphanumeric characters).
 *
 * @param {number} length - The length of the random string to generate.
 * @returns {string} - A random string of the specified length.
 */
const randomString = (length: number): string => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(randomNumber(0, charactersLength - 1));
  }

  return result;
};

export { randomString };
