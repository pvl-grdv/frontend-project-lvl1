import {
  gameRules, userGreeting, asker, getRandomIntInclusive,
  answerIsCorrect, answerIsUncorrect, congratulations,
} from '../index.js';

export default () => {
  const userName = userGreeting();
  gameRules('even');
  let rightAnswersCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomIntInclusive(0, 1000);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = asker(`Question: ${randomNumber}\nYour answer: `);
    if (userAnswer === correctAnswer) {
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
