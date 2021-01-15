import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import getRandomOperation from '../utils/getRandomOperation.js';

export default function brainCalc() {
  const userName = greeting();
  console.log('What is the result of the expression?');
  let countOfRightAnswers = 0;

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

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operation = getRandomOperation();
    const rightAnswer = getRightAnswerCalc(firstNumber, secondNumber, operation).toString();

    const answer = readlineSync.question(`Question: ${firstNumber} ${operation} ${secondNumber} \nYour answer: `);

    if (answer === rightAnswer) {
      countOfRightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
