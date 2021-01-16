import readlineSync from 'readline-sync';
import greeting from './cli.js';

// Движку нужно передать:
// 1. правила каждой игры
// 2. вопросы которые нужно задавать пользователю (3шт.)
// 3. правильные ответы на эти вопросы (3шт.)

export default function engine(gameRules, gameData) {
  const countOfRounds = 3;
  let countOfRightAnswers = 0;

  // Greeting & userName saving
  const userName = greeting();

  // Show game rules
  console.log(gameRules);

  // Show questions & counting right answers
  for (let i = 0; i < countOfRounds; i += 1) {
    const { userAnswer, rightAnswer } = gameData[i];
    const answer = readlineSync.question(userAnswer);

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
