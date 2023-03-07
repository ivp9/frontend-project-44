import readlineSync from 'readline-sync';
import playGame from '../index.js';
import { generateRandomNumber, getGCD } from '../utils.js';

const initGameGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getRound = () => {
    const number1 = generateRandomNumber(100);
    const number2 = generateRandomNumber(100);
    console.log(`Question: ${number1} ${number2}`);
    const correctAnswer = getGCD(number1, number2);
    const question = Number(readlineSync.question('Your answer: '));
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameGCD;
