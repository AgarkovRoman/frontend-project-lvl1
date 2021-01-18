import engine from '../index.js';
import createProgression from '../utils/createProgression.js';

export default function brainProgression() {
  const gameRules = 'What number is missing in the progression?';
  const gameData = [];

  for (let i = 0; i < 3; i += 1) {
    const { resultString, missingElement } = createProgression();
    const rightAnswer = missingElement;
    const userAnswer = `Question: ${resultString} \nYour answer: `;
    const obj = { id: i, userAnswer, rightAnswer };

    gameData.push(obj);
  }

  engine(gameRules, gameData);
}
