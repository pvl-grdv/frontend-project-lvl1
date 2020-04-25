import { runGame, roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'What number is missing in the progression?';
const generateQuestionsAndAnswers = () => {
  const questionsAnswers = [];

  for (let i = 0; i <= roundsCount; i += 1) {
    const progressionMake = () => {
      const progressions = [];
      const firstNumber = getRandomNumber(0, 100);
      const difference = getRandomNumber(0, 10);
      for (let number = 0; number < 10; number += 1) {
        progressions[number] = firstNumber + (number - 1) * difference;
      }
      return progressions;
    };
    const generateQuestion = (array, censoredPosition) => {
      const censoredArray = [...array];
      censoredArray[censoredPosition] = '..';
      const question = censoredArray.join(' ');
      return question;
    };
    const fullArray = progressionMake();
    const positionOfSecret = getRandomNumber(0, fullArray.length - 1);
    const question = generateQuestion(fullArray, positionOfSecret);
    const correctAnswer = String(fullArray[positionOfSecret]);
    questionsAnswers.push([question, correctAnswer]);
  }
  return questionsAnswers;
};

export default () => {
  runGame(generateQuestionsAndAnswers(), rule);
};
