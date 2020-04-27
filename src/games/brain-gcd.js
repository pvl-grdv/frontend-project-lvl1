import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const generateRound = () => {
  const round = [];
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(gcd(randomNumber1, randomNumber2));
  round.push(question, correctAnswer);
  return round;
};

// const generateRounds = () => {
//   const rounds = [];
//   for (let i = 0; i <= roundsCount; i += 1) {
//     rounds.push(generateRound());
//   }
//   return rounds;
// };


export default () => {
  runGame(rule, generateRound());
};
