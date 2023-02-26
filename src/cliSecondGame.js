import readlineSync from 'readline-sync';

const playSecondGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let countOfCorrectAnswers = 0; countOfCorrectAnswers < 3; countOfCorrectAnswers += 1) {
    const operators = ['+', '-', '*'];
    const indexOfOperators = Math.round(Math.random() * 2);
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    console.log(`Question: ${number1} ${operators[indexOfOperators]} ${number2}`);
    let correctAnswer;
    switch (indexOfOperators) {
      case 0:
        correctAnswer = number1 + number2;
        break;
      case 1:
        correctAnswer = number1 - number2;
        break;
      default:
        correctAnswer = number1 * number2;
        break;
    }
    const answer = Number(readlineSync.question('Your answer: '));
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
export default playSecondGame;
