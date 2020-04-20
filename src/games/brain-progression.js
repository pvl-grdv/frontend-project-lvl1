import { gameRules, userGreeting, asker, getRandomIntInclusive, answerIsCorrect, answerIsUncorrect, congratulations } from '../index.js';

const progressionMaker = () => {
  const progressionArr = [];
  const firstNumber = getRandomIntInclusive(0, 100);
  const n = getRandomIntInclusive(0, 10);
  progressionArr[0] = firstNumber;
  for (let number = 1; number < 10; number += 1) {
    progressionArr[number] = progressionArr[number - 1] + n;
  }
  return progressionArr;
};

const sensoredArr = (array, censoredPosition) => {
  array[censoredPosition] = '..';
  return array;
};

export default () => {
  const userName = userGreeting();
  gameRules('progression');
  let rightAnswersCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    const fullArray = progressionMaker();
    const positionOfSecret = getRandomIntInclusive(0, fullArray.length - 1);
    const correctAnswer = fullArray[positionOfSecret];
    const question = sensoredArr(fullArray, positionOfSecret).join(' ');
    const userAnswer = asker(`Question: ${question}\nYour answer: `);
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
