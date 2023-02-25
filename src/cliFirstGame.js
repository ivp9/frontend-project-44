import readlineSync from 'readline-sync';

const playFirstGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let countOfCorrectAnswers = 0; countOfCorrectAnswers < 3; countOfCorrectAnswers += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    let correctAnswer;
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      if (countOfCorrectAnswers === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      countOfCorrectAnswers = 3;
    }
  }
};
export default playFirstGame;
