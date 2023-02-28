import readlineSync from 'readline-sync';

const playGame = (rule, getAnswerAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let countOfCorrectAnswers = 0; countOfCorrectAnswers < 3; countOfCorrectAnswers += 1) {
    console.log(rule);
    const [answer, correctAnswer] = getAnswerAndCorrectAnswer();
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
export default playGame;
