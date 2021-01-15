export default function getRandomOperation() {
  const operations = '-+*';
  const min = 1;
  const max = 3;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  return operations.charAt(number - 1);
}
