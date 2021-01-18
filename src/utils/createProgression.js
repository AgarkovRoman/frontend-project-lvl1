import getRandomNumberInRange from './getRandomNumberInRange.js';

export default function createProgression() {
  const min = 3;
  const max = 20;

  const length = getRandomNumberInRange(5, 10);
  const startNumber = getRandomNumberInRange(min, max);
  const step = getRandomNumberInRange(1, 7);
  const indexOfMissingElement = getRandomNumberInRange(0, length - 1);

  let result = [];
  for (let i = startNumber; i <= startNumber + (length * step); i += step) {
    result = [...result, i];
  }

  const missingElement = result[indexOfMissingElement].toString();
  const resultString = result.join(', ').replace(missingElement, '..');

  return { resultString, missingElement };
}
