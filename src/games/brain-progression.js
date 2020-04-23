import { runGame, roundCount } from '../index.js';
import { getRandomNumber } from '../utils.js';
// game rules
const rules = 'What number is missing in the progression?';
// make questionExpressionArray and correctAnswerArray
const questionExpressionArray = [];
const correctAnswerArray = [];

for (let i = 0; i <= roundCount; i += 1) {
  const progressionMaker = () => {
    const progressionArr = [];
    const firstNumber = getRandomNumber(0, 100);
    const difference = getRandomNumber(0, 10);
    progressionArr[0] = firstNumber;
    for (let number = 1; number < 10; number += 1) {
      progressionArr[number] = progressionArr[number - 1] + difference;
    }
    return progressionArr;
  };
  const generateQuestion = (array, censoredPosition) => {
    const censoredArray = [...array];
    censoredArray[censoredPosition] = '..';
    const questionString = censoredArray.join(' ');
    return questionString;
  };
  const fullArray = progressionMaker();
  const positionOfSecret = getRandomNumber(0, fullArray.length - 1);
  const questionExpression = generateQuestion(fullArray, positionOfSecret);
  const correctAnswer = String(fullArray[positionOfSecret]);
  questionExpressionArray.push(questionExpression);
  correctAnswerArray.push(correctAnswer);
}

// run game
export default () => {
  runGame(correctAnswerArray, questionExpressionArray, rules);
};
