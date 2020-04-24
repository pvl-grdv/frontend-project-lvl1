import readlineSync from 'readline-sync';

export const roundsCount = 3;

// runGame engine
export const runGame = (questionsAnswers, rule) => {
  // Greeting
  console.log('Welcome to the Brain Games!');
  // Ask name
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Show rules
  console.log(rule);
  // Start game
  for (let i = 0; i < roundsCount; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${questionsAnswers[i][0]}\nYour answer: `);
    if (userAnswer === questionsAnswers[i][1]) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${questionsAnswers[i][1]}".`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
