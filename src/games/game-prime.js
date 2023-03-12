/* eslint-disable linebreak-style */
import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (number) => {
  const arrayOfNumberDivisors = [];
  for (let value = 1; value <= number; value += 1) {
    if (number % value === 0) {
      arrayOfNumberDivisors.push(value);
    }
  }
  const result = arrayOfNumberDivisors.length === 2;
  return result;
};

const initGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const getRound = () => {
    const number = generateRandomNumber(100);
    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGamePrime;
