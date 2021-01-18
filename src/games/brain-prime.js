import engine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import isNumberPrime from '../utils/isNumberPrime.js';

export default function brainPrime() {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];

  for (let i = 0; i < 3; i += 1) {
    const element = getRandomNumber();
    const rightAnswer = isNumberPrime(element) ? 'yes' : 'no';
    const userAnswer = `Question: ${element} \nYour answer: `;
    const obj = { id: i, userAnswer, rightAnswer };

    gameData.push(obj);
  }

  engine(gameRules, gameData);
}
