import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

const generateRound = () => {
  const question = String(getRandomNumber(1, 100));
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(rule, generateRound);
};
