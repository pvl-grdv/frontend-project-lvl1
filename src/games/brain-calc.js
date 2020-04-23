import { runGame, roundCount } from '../index.js';
import { getRandomNumber } from '../utils.js';
// game rules
const rules = 'What is the result of the expression?';
// make questionExpressionArray and correctAnswerArray
const questionExpressionArray = [];
const correctAnswerArray = [];

for (let i = 0; i <= roundCount; i += 1) {
  const randomOperator = () => {
    const operationsArray = ['+', '-', '*'];
    const operatorString = operationsArray[getRandomNumber(0, 2)];
    return operatorString;
  };
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
  const operator = randomOperator();
  const operand1 = getRandomNumber(0, 100);
  const operand2 = getRandomNumber(0, 100);

  const questionExpression = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calculate(operator, operand1, operand2));
  questionExpressionArray.push(questionExpression);
  correctAnswerArray.push(correctAnswer);
}

// export function
export default () => {
  runGame(correctAnswerArray, questionExpressionArray, rules);
};
