import { runGame, roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateQuestionsAndAnswers = () => {
  const questionsAnswers = [];

  for (let i = 0; i <= roundsCount; i += 1) {
    const isPrime = (number) => {
      if (number <= 1) {
        return false;
      }
      for (let divider = 2; divider <= number / 2; divider += 1) {
        if (number % divider === 0) {
          return false;
        }
      }
      return true;
    };
    const randomNumber = getRandomNumber(0, 100);
    const question = `${randomNumber}`;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    questionsAnswers.push([question, correctAnswer]);
  }
  return questionsAnswers;
};

export default () => {
  runGame(generateQuestionsAndAnswers(), rule);
};
