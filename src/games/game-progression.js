/* eslint-disable linebreak-style */
import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const getProgression = (firstNumber, difference) => {
  const countOfNumbers = 10;
  const arrayOfNumbers = [firstNumber];
  let nextNumber = firstNumber;
  for (let i = 1; i < countOfNumbers; i += 1) {
    nextNumber += difference;
    arrayOfNumbers.push(nextNumber);
  }
  return arrayOfNumbers;
};

const initGameProgression = () => {
  const description = 'What number is missing in the progression?';
  const getRound = () => {
    const firstNumber = generateRandomNumber(100);
    const step = generateRandomNumber(10);
    const indexOfHiddenNumber = generateRandomNumber(9);
    const arrayOfNumbers = getProgression(firstNumber, step);
    const correctAnswer = String(arrayOfNumbers[indexOfHiddenNumber]);
    arrayOfNumbers[indexOfHiddenNumber] = '..';
    const question = `${arrayOfNumbers.join(' ')}`;
    return [question, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameProgression;
