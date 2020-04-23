import { runGame, roundCount } from '../index.js';
import { getRandomNumber } from '../utils.js';
// game rules
const rules = 'Find the greatest common divisor of given numbers.';
// make questionExpressionArray and correctAnswerArray
const questionExpressionArray = [];
const correctAnswerArray = [];

for (let i = 0; i <= roundCount; i += 1) {
  const greatestCommonDivisor = (m, n) => {
    let divisor = m > n ? n : m;
    while (divisor >= 1 && (m % divisor !== 0 || n % divisor !== 0)) {
      divisor -= 1;
    }
    return divisor;
  };
  const randomNumber1 = getRandomNumber(0, 100);
  const randomNumber2 = getRandomNumber(0, 100);
  const questionExpression = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(greatestCommonDivisor(randomNumber1, randomNumber2));
  questionExpressionArray.push(questionExpression);
  correctAnswerArray.push(correctAnswer);
}
// run game
export default () => {
  runGame(correctAnswerArray, questionExpressionArray, rules);
};
