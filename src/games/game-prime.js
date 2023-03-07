/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import playGame from '../index.js';
import { generateRandomNumber, isPrime } from '../utils.js';

const initGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const getRound = () => {
    const number = generateRandomNumber(100);
    console.log(`Question: ${number}`);
    let correctAnswer = isPrime(number);
    correctAnswer = (correctAnswer === 'true' ? 'yes' : 'no');
    const question = (readlineSync.question('Your answer: '));
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGamePrime;
