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

const generateQuestionsAndAnswers = () => {
  const questionsAnswers = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    const operator = operations[getRandomNumber(0, 2)];
    const operand1 = getRandomNumber(0, 100);
    const operand2 = getRandomNumber(0, 100);

    const question = `${operand1} ${operator} ${operand2}`;
    const correctAnswer = String(calculate(operator, operand1, operand2));
    questionsAnswers.push([question, correctAnswer]);
  }
  return questionsAnswers;
};


// export function
export default () => {
  runGame(generateQuestionsAndAnswers(), rule);
};
