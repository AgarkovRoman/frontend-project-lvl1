import getRandomNumberInRange from './getRandomNumberInRange.js';

export default function getRandomOperation() {
  const operations = '-+*';
  const min = 1;
  const max = 3;
  const number = getRandomNumberInRange(min, max);

  return operations.charAt(number - 1);
}
