import readlineSync from 'readline-sync';

let userName;
export const userGreeting = () => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const brainEven = () => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  userGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswersCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomInt(100);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      rightAnswersCount += 1;
    }
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}`);
      break;
    }
  };
  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}