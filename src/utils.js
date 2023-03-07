export const generateRandomNumber = (size) => Math.round(Math.random() * size);

export const calculate = (indexOfOperators, number1, number2) => {
  let correctAnswer;
  switch (indexOfOperators) {
    case 0:
      correctAnswer = number1 + number2;
      break;
    case 1:
      correctAnswer = number1 - number2;
      break;
    case 2:
      correctAnswer = number1 * number2;
      break;
    default:
      console.log('Error');
      break;
  }
  return correctAnswer;
};

export const getGCD = (number1, number2) => {
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
  return correctAnswer;
};

export const getProgression = (firstNumber, difference) => {
  const countOfNumbers = 10;
  const arrayOfNumbers = [firstNumber];
  let nextNumber = firstNumber;
  for (let i = 1; i < countOfNumbers; i += 1) {
    nextNumber += difference;
    arrayOfNumbers.push(nextNumber);
  }
  return arrayOfNumbers;
};

export const isEven = (number) => (number % 2 === 0 ? 'true' : 'false');

export const isPrime = (number) => {
  const arrayOfNumberDivisors = [];
  for (let value = 1; value <= number; value += 1) {
    if (number % value === 0) {
      arrayOfNumberDivisors.push(value);
    }
  }
  const result = (arrayOfNumberDivisors.length === 2 ? 'true' : 'false');
  return result;
};
