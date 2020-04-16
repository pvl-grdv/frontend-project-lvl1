import { gameRules, userGreeting, asker, getRandomIntInclusive, answerIsCorrect, answerIsUncorrect, congratulations } from '../index.js';

const randomOperator = () => {
  const operationsArray = ['+', '-', '*'];
  const operatorString = operationsArray[getRandomIntInclusive(0, 2)];
  return operatorString;
};

export default () => {
  const userName = userGreeting();
  gameRules('calc');
  let rightAnswersCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    const questionExpression = `${getRandomIntInclusive(0, 100)} ${randomOperator()} ${getRandomIntInclusive(0, 100)}`;
    const correctAnswer = eval(questionExpression);
    const userAnswer = asker(`Question: ${questionExpression}\nYour answer: `);
    if (userAnswer == correctAnswer) {
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
