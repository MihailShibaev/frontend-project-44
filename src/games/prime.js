
1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
import gameProcess from '../index.js';
import randomIntFromInterval from '../random.js';

const gameInvitation = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
const first100primeList=[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
return first100primeList.includes(num) ? 'yes':'no';
};

const gamedataArray = () => {
  const question = randomIntFromInterval(1, 100);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

const randomIsPrime = () => {
    gameProcess(gameInvitation, gamedataArray);
  };
  
  export default randomIsPrime;
  