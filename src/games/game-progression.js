/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import playGame from '../index.js';
import { generateRandomNumber, getProgression } from '../utils.js';

const initGameProgression = () => {
  const description = 'What number is missing in the progression?';
  const getRound = () => {
    const firstNumber = generateRandomNumber(100);
    const difference = generateRandomNumber(10);
    const indexOfHiddenNumber = generateRandomNumber(9);
    const arrayOfNumbers = getProgression(firstNumber, difference);
    const correctAnswer = arrayOfNumbers[indexOfHiddenNumber];
    arrayOfNumbers[indexOfHiddenNumber] = '..';
    console.log(`Question: ${arrayOfNumbers.join(' ')}`);
    const question = Number(readlineSync.question('Your answer: '));
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameProgression;
