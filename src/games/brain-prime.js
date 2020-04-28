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
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const round = [question, correctAnswer];
  return round;
};

export default () => {
  runGame(rule, generateRound);
};
