import engine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

export default function brainPrime() {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];

  const isNumberPrime = (number) => {
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
  };

  for (let i = 0; i < 3; i += 1) {
    const element = getRandomNumber();
    const rightAnswer = isNumberPrime(element) ? 'yes' : 'no';
    const userAnswer = `Question: ${element} \nYour answer: `;
    const obj = { id: i, userAnswer, rightAnswer };

    gameData.push(obj);
  }

  engine(gameRules, gameData);
}
