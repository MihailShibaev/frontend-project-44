import gameProcess from '../index.js';
import randomIntFromInterval from '../random.js';

const gameInvitation = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if(num<=1){return false;}
  for (let i=2; i< num; i+=1){
    if (num %i === 0) return false;
  }
  return true;
};

const gamedataArray = () => {
  const question = randomIntFromInterval(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const randomIsPrime = () => {
  gameProcess(gameInvitation, gamedataArray);
};

export default randomIsPrime;
