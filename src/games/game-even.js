import readlineSync from 'readline-sync';
import playGame from '../index.js';

const initGameEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getRound = () => {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    let correctAnswer;
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const answer = readlineSync.question('Your answer: ');
    return [answer, correctAnswer];
  };
  playGame(description, getRound);
};
export default initGameEven;
