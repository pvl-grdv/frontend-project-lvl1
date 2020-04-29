import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (firstNumber, difference) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression[i] = firstNumber + i * difference;
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const difference = getRandomNumber(0, 10);
  const fullProgression = generateProgression(firstNumber, difference);
  const hiddenPosition = getRandomNumber(0, progressionLength - 1);
  const censoredProgression = [...fullProgression];
  censoredProgression[hiddenPosition] = '..';
  const question = censoredProgression.join(' ');
  const correctAnswer = String(fullProgression[hiddenPosition]);
  return [question, correctAnswer];
};

export default () => {
  runGame(rule, generateRound);
};
