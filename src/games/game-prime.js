/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import playGame from '../index.js';

const initGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const getRound = () => {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const arrayOfNumberDivisors = [];
    let correctAnswer;
    for (let value = 1; value <= number; value += 1) {
      if (number % value === 0) {
        arrayOfNumberDivisors.push(value);
      }
    }
    switch (arrayOfNumberDivisors.length === 2) {
      case true:
        correctAnswer = 'yes';
        break;
      default:
        correctAnswer = 'no';
        break;
    }
    const answer = (readlineSync.question('Your answer: '));
    return [answer, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGamePrime;
