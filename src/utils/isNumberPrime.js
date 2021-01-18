export default function isNumberPrime(number) {
  let result = true;

  if (number < 2) {
    result = false;
  } else if (number === 2) {
    result = true;
  } else {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        result = false;
      }
    }
  }
  return result;
}
