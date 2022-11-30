import gameProcess from '../index.js';

const gameInvitation = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomIntFromInterval = (min, max) => {
// min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

const isEven = (num) => num % 2 === 0;

const gamedataArray = () => {
    const question = randomIntFromInterval(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  
const checkingRandomIsEven = () => {
    gameProcess(gameInvitation, gamedataArray);
  };
  
export default checkingRandomIsEven;