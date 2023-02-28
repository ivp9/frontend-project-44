import readlineSync from 'readline-sync';
import playGame from '../index.js';

const initGameCalc = () => {
  const rule = 'What is the result of the expression?';
  const getAnswerAndCorrectAnswer = () => {
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
    return [answer, correctAnswer];
  };
  playGame(rule, getAnswerAndCorrectAnswer);
};
export default initGameCalc;
