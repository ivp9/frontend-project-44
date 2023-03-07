import readlineSync from 'readline-sync';
import playGame from '../index.js';
import { generateRandomNumber, calculate } from '../utils.js';

const initGameCalc = () => {
  const description = 'What is the result of the expression?';
  const getRound = () => {
    const operators = ['+', '-', '*'];
    const indexOfOperators = generateRandomNumber(2);
    const number1 = generateRandomNumber(100);
    const number2 = generateRandomNumber(100);
    console.log(`Question: ${number1} ${operators[indexOfOperators]} ${number2}`);
    const correctAnswer = calculate(indexOfOperators, number1, number2);
    const question = Number(readlineSync.question('Your answer: '));
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameCalc;
