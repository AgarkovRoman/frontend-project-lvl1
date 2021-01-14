import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function brainEven() {
  const numbers = [
    { number: 15, rightAnswer: 'no' },
    { number: 6, rightAnswer: 'yes' },
    { number: 7, rightAnswer: 'no' },
  ];
  let countOfRightAnswers = 0;

  // Greeting & userName saving
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Show questions & counting right answers
  for (let i = 0; i < numbers.length; i += 1) {
    const element = numbers[i];
    const answer = readlineSync.question(`Question: ${element.number} \nYour answer: `);
    if (answer === element.rightAnswer) {
      countOfRightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${element.rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }

  // Show 'Congratulations' if all answers are right
  if (countOfRightAnswers === numbers.length) {
    console.log(`Congratulations, ${userName}!`);
  }
}
