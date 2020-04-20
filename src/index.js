import readlineSync from 'readline-sync';

export const asker = (question) => readlineSync.question(question);

export const userGreeting = () => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomIntInclusive = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const answerIsCorrect = () => {
  console.log('Correct!');
};

export const answerIsUncorrect = (userAnswer, correctAnswer, userName) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}`);
};

export const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const gameRules = (gameName) => {
  switch (gameName) {
    case 'calc':
      return console.log('What is the result of the expression?');
    case 'even':
      return console.log('Answer "yes" if the number is even, otherwise answer "no".');
    case 'gcd':
      return console.log('Find the greatest common divisor of given numbers.');
    case 'progression':
      return console.log('What number is missing in the progression?');
    default:
      return console.log('There is no game rules.');
  }
};
