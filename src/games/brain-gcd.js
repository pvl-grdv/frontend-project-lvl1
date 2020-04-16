import { gameRules, userGreeting, asker, getRandomIntInclusive, answerIsCorrect, answerIsUncorrect, congratulations } from '../index.js';

const greatestCommonDivisor = (m, n) => {
  let divisor = m > n ? n : m;
  while (divisor >= 1 && (m % divisor !== 0 || n % divisor !== 0)) {
    divisor -= 1;
  }
  return divisor;
};

export default () => {
  const userName = userGreeting();
  gameRules('gcd');
  let rightAnswersCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = getRandomIntInclusive(0, 100);
    const randomNumber2 = getRandomIntInclusive(0, 100);
    const correctAnswer = greatestCommonDivisor(randomNumber1, randomNumber2);
    const userAnswer = asker(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
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
