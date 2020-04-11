import readlineSync from 'readline-sync';

const userGreeting = () => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default userGreeting;
