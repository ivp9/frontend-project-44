/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import playGame from '../index.js';

const initGameProgression = () => {
  const description = 'What number is missing in the progression?';
  const getRound = () => {
    const countOfNumbers = 10;
    let firstNumber = Math.round(Math.random() * 100);
    const arrayOfNumbers = [firstNumber];
    const difference = Math.round(Math.random() * 10);
    for (let i = 1; i < countOfNumbers; i += 1) {
      firstNumber += difference;
      arrayOfNumbers.push(firstNumber);
    }
    const indexOfHiddenNumber = Math.round(Math.random() * 9);
    const correctAnswer = arrayOfNumbers[indexOfHiddenNumber];
    arrayOfNumbers[indexOfHiddenNumber] = '..';
    console.log(`Question: ${arrayOfNumbers.join(' ')}`);
    const answer = Number(readlineSync.question('Your answer: '));
    return [answer, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameProgression;
