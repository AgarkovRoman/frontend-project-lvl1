import getRandomNumber from '../utils/getRandomNumber.js';
import engine from '../index.js';

export default function brainEven() {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRightAnswerEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  const gameData = [];

  for (let i = 0; i < 3; i += 1) {
    const element = getRandomNumber();
    const rightAnswer = getRightAnswerEven(element);
    const userAnswer = `Question: ${element} \nYour answer: `;
    const obj = { id: i, userAnswer, rightAnswer };

    gameData.push(obj);
  }

  engine(gameRules, gameData);
}
