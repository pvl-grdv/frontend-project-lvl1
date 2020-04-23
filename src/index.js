import readlineSync from 'readline-sync';

export const roundCount = 3;
// number of rounds is used for array sizing of questionExpression and correctAnswer in games.

const askQuestion = (question) => readlineSync.question(question);

const answerIsCorrect = () => {
  console.log('Correct!');
};

const answerIsUncorrect = (userAnswer, correctAnswer, userName) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}`);
};

// runGame engine
export const runGame = (correctAnswerArray, questionExpressionArray, rules) => {
  // Greeting
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  // Ask name
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Show rules
  console.log(rules);
  // Start game
  let rightAnswersCount = 0;
  for (let i = 0; i < roundCount; i += 1) {
    const userAnswer = askQuestion(`Question: ${questionExpressionArray[i]}\nYour answer: `);
    if (userAnswer === correctAnswerArray[i]) {
      answerIsCorrect();
      rightAnswersCount += 1;
    } else {
      answerIsUncorrect(userAnswer, correctAnswerArray[i], userName);
      return;
    }
  }
  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
