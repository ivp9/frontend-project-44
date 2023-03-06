import readlineSync from 'readline-sync';

const playGame = (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let countOfRounds = 1; countOfRounds < 4; countOfRounds += 1) {
    console.log(description);
    const [answer, correctAnswer] = getRound();
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (countOfRounds === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
};
export default playGame;
