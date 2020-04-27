import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const runGame = (rule, round) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = round;
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
