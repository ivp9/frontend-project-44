import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const initGameEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getRound = () => {
    const number = generateRandomNumber(100);
    const question = number;
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameEven;
