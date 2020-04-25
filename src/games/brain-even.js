import { runGame, roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionsAndAnswers = () => {
  const questionsAnswers = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, 1000);
    const question = randomNumber;
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    questionsAnswers.push([question, correctAnswer]);
  }
  return questionsAnswers;
};

export default () => {
  runGame(generateQuestionsAndAnswers(), rule);
};
