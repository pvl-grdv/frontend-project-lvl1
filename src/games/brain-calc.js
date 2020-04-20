import {
  gameRules, userGreeting, asker, getRandomIntInclusive,
  answerIsCorrect, answerIsUncorrect, congratulations,
} from '../index.js';

const randomOperator = () => {
  const operationsArray = ['+', '-', '*'];
  const operatorString = operationsArray[getRandomIntInclusive(0, 2)];
  return operatorString;
};

const calc = (operator, operand1, operand2) => {
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
      return NaN;
  }
};

export default () => {
  const userName = userGreeting();
  gameRules('calc');
  let rightAnswersCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    const operator = randomOperator();
    const operand1 = getRandomIntInclusive(0, 100);
    const operand2 = getRandomIntInclusive(0, 100);
    const questionExpression = `${operand1} ${operator} ${operand2}`;
    const correctAnswer = calc(operator, operand1, operand2);
    const userAnswer = asker(`Question: ${questionExpression}\nYour answer: `);
    if (Number(userAnswer) === correctAnswer) {
      answerIsCorrect();
      rightAnswersCount += 1;
    } else {
      answerIsUncorrect(userAnswer, correctAnswer, userName);
      break;
    }
  }
  if (rightAnswersCount === 3) {
    congratulations(userName);
  }
};
