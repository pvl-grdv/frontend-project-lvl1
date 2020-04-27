import { runGame, roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const operations = ['+', '-', '*'];
const rule = 'What is the result of the expression?';
const generateRound = () => {
  const round = [];
  const operator = operations[getRandomNumber(0, 2)];
  const operand1 = getRandomNumber(0, 100);
  const operand2 = getRandomNumber(0, 100);

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calculate(operator, operand1, operand2));
  round.push(question, correctAnswer);
  return round;
};

export const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const round = generateRound();
    rounds.push(round);
  }
  return rounds;
};

export default () => {
  runGame(generateRounds(), rule);
};
