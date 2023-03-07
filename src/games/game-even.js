import readlineSync from 'readline-sync';
import playGame from '../index.js';
import { generateRandomNumber, isEven } from '../utils.js';

const initGameEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getRound = () => {
    const number = generateRandomNumber(100);
    console.log(`Question: ${number}`);
    let correctAnswer = isEven(number);
    correctAnswer = (correctAnswer === 'true' ? 'yes' : 'no');
    const question = readlineSync.question('Your answer: ');
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameEven;
