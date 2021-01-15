export default function getRandomOperation() {
  const number = Math.floor(Math.random() * 100);

  if (number > 0 && number <= 33) {
    return '-';
  }

  if (number > 33 && number <= 66) {
    return '+';
  }

  if (number > 66) {
    return '*';
  }

  return null;
}
