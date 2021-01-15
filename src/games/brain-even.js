import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRandomNumber from '../utils/getRandomNumber.js';

export default function brainEven() {
  let countOfRightAnswers = 0;

  // Greeting & userName saving
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRightAnswerEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  // Show questions & counting right answers
  for (let i = 0; i < 3; i += 1) {
    const element = getRandomNumber();
    const rightAnswer = getRightAnswerEven(element);

    const answer = readlineSync.question(`Question: ${element} \nYour answer: `);
    if (answer === rightAnswer) {
      countOfRightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }

  // Show 'Congratulations' if all answers are right
  if (countOfRightAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
