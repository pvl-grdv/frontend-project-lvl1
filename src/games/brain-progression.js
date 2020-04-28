import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const generateProgression = () => {
  const progression = [];
  const progressionLength = 10;
  const firstNumber = getRandomNumber(0, 100);
  const difference = getRandomNumber(0, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstNumber + (i - 1) * difference;
  }
  return progression;
};
const rule = 'What number is missing in the progression?';

const generateRound = () => {
  const fullProgression = generateProgression();
  const hiddenPosition = getRandomNumber(0, fullProgression.length - 1);
  const censoredProgression = [...fullProgression];
  censoredProgression[hiddenPosition] = '..';
  const question = censoredProgression.join(' ');
  const correctAnswer = String(fullProgression[hiddenPosition]);
  const round = [question, correctAnswer];
  return round;
};

export default () => {
  runGame(rule, generateRound);
};
