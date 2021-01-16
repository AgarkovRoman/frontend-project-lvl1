import engine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

export default function brainGcd() {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const getRightAnswerGcd = (firstNumber, secondNumber) => {
    let nod = 0;
    let first = firstNumber;
    let second = secondNumber;

    while (first > 0 && second > 0) {
      if (first > second) {
        first %= second;
      } else {
        second %= first;
      }
    }
    nod = first + second;
    return nod;
  };

  const gameData = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNumber();
    const secondNum = getRandomNumber();
    const rightAnswer = getRightAnswerGcd(firstNum, secondNum).toString();
    const userAnswer = `Question: ${firstNum} ${secondNum} \nYour answer: `;
    const obj = { id: i, userAnswer, rightAnswer };

    gameData.push(obj);
  }

  engine(gameRules, gameData);
}
