import readlineSync from 'readline-sync';
import playGame from '../index.js';

const initGameGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getRound = () => {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    console.log(`Question: ${number1} ${number2}`);
    const arrayFirstNumberDivisor = [];
    const arraySecondNumberDivisor = [];
    const arrayOfCommonDivisor = [];
    for (let value1 = 0; value1 <= number1; value1 += 1) {
      if (number1 % value1 === 0) {
        arrayFirstNumberDivisor.push(value1);
      }
    }
    for (let value2 = 0; value2 <= number2; value2 += 1) {
      if (number2 % value2 === 0) {
        arraySecondNumberDivisor.push(value2);
      }
    }
    /* eslint-disable-next-line */
    for (const value11 of arrayFirstNumberDivisor) {
      /* eslint-disable-next-line */
      for (const value22 of arraySecondNumberDivisor) {
        if (value11 === value22) {
          arrayOfCommonDivisor.push(value11);
        }
      }
    }
    const correctAnswer = Math.max(...arrayOfCommonDivisor);
    const answer = Number(readlineSync.question('Your answer: '));
    return [answer, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameGCD;
