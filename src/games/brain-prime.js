import {
  gameRules, userGreeting, asker, getRandomIntInclusive,
  answerIsCorrect, answerIsUncorrect, congratulations,
} from '../index.js';

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

export default () => {
  const userName = userGreeting();
  gameRules('prime');
  let rightAnswersCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomIntInclusive(0, 100);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const userAnswer = asker(`Question: ${randomNumber}\nYour answer: `);
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
