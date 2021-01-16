import getRandomNumber from '../utils/getRandomNumber.js';
import getRandomOperation from '../utils/getRandomOperation.js';
import engine from '../index.js';

export default function brainCalc() {
  const gameRules = 'What is the result of the expression?';

  const getRightAnswerCalc = (firstNum, secondNum, operation) => {
    switch (operation) {
      case '-':
        return firstNum - secondNum;
      case '+':
        return firstNum + secondNum;
      case '*':
        return firstNum * secondNum;
      default:
        return null;
    }
  };

  const gameData = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operation = getRandomOperation();
    const rightAnswer = getRightAnswerCalc(firstNumber, secondNumber, operation).toString();
    const userAnswer = `Question: ${firstNumber} ${operation} ${secondNumber} \nYour answer: `;

    const obj = { id: i, userAnswer, rightAnswer };

    gameData.push(obj);
  }

  engine(gameRules, gameData);
}
