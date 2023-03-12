import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (indexOfOperators, number1, number2) => {
  let correctAnswer;
  switch (indexOfOperators) {
    case 0:
      correctAnswer = number1 + number2;
      break;
    case 1:
      correctAnswer = number1 - number2;
      break;
    case 2:
      correctAnswer = number1 * number2;
      break;
    default:
      console.log('Error');
      break;
  }
  return String(correctAnswer);
};

const initGameCalc = () => {
  const description = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const getRound = () => {
    const indexOfOperators = generateRandomNumber(2);
    const number1 = generateRandomNumber(100);
    const number2 = generateRandomNumber(100);
    const question = `${number1} ${operators[indexOfOperators]} ${number2}`;
    const correctAnswer = calculate(indexOfOperators, number1, number2);
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameCalc;
