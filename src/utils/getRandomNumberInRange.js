export default function getRandomNumberInRange(min = 1, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
