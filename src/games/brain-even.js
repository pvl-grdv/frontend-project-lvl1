import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 1000);
  const question = randomNumber;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const round = [question, correctAnswer];
  return round;
};

export default () => {
  runGame(rule, generateRound);
};
