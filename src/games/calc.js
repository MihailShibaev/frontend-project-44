import gameProcess from '../index.js';

const randomIntFromInterval = (min, max) => {
    // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    };

const gameInvitation = 'What is the result of the expression?';

const easyCalculate = (operation, firstOperand, secondOperand) => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return undefined;
  }
};

const gamedataArray = () => {
  const firstOperand = randomIntFromInterval(1, 10);
  const secondOperand = randomIntFromInterval(1, 10);
  const operators = ['+', '-', '*'];
  const operation = operators[randomIntFromInterval(0, operators.length - 1)];
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const correctAnswer = easyCalculate(operation, firstOperand, secondOperand);
  return [question, correctAnswer];
};

const randomEasyCalculate = () => {
  gameProcess(gameInvitation, gamedataArray);
};

export default randomEasyCalculate;