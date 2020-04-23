import { runGame, roundCount } from '../index.js';
import { getRandomNumber } from '../utils.js';
// game rules
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
// make questionExpressionArray and correctAnswerArray
const questionExpressionArray = [];
const correctAnswerArray = [];

for (let i = 0; i <= roundCount; i += 1) {
  const randomNumber = getRandomNumber(0, 1000);
  const questionExpression = randomNumber;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  questionExpressionArray.push(questionExpression);
  correctAnswerArray.push(correctAnswer);
}

// run game
export default () => {
  runGame(correctAnswerArray, questionExpressionArray, rules);
};
