import { runGame, roundCount } from '../index.js';
import { getRandomNumber } from '../utils.js';
// game rules
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// make questionExpressionArray and correctAnswerArray
const questionExpressionArray = [];
const correctAnswerArray = [];

for (let i = 0; i <= roundCount; i += 1) {
  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    for (let divider = 2; divider < number; divider += 1) {
      if (number % divider === 0) {
        return false;
      }
    }
    return true;
  };
  const randomNumber = getRandomNumber(0, 100);
  const questionExpression = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  questionExpressionArray.push(questionExpression);
  correctAnswerArray.push(correctAnswer);
}

// run game
export default () => {
  runGame(correctAnswerArray, questionExpressionArray, rules);
};
