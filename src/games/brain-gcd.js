import { runGame, roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const generateQuestionsAndAnswers = () => {
  const questionsAnswers = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const gcd = (a, b) => {
      if (b === 0) {
        return a;
      }

      return gcd(b, a % b);
    };

    const randomNumber1 = getRandomNumber(0, 100);
    const randomNumber2 = getRandomNumber(0, 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = String(gcd(randomNumber1, randomNumber2));
    questionsAnswers.push([question, correctAnswer]);
  }
  return questionsAnswers;
};

export default () => {
  runGame(generateQuestionsAndAnswers(), rule);
};
