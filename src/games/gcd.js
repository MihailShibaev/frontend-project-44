import gameProcess from '../index.js';
import randomIntFromInterval from '../random.js';

const gameInvitation = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstOperand, secondOperand) => {
  let maxDivisor =1; //current greatest common divisor for anything arguments
  const minOperand = firstOperand <= secondOperand ? firstOperand : secondOperand; //какой из операндов меньше ?
for (let i=1; i <= minOperand; i+=1){
    if (firstOperand%i === 0 && secondOperand%i === 0) {
        maxDivisor = i;
    }
}
return maxDivisor;
};

const gamedataArray = () => {
  const firstOperand = randomIntFromInterval(1, 40);
  const secondOperand = randomIntFromInterval(1, 40);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = findGcd(firstOperand, secondOperand);
  return [question, correctAnswer];
};

const randomGcdFind = () => {
  gameProcess(gameInvitation, gamedataArray);
};

export default randomGcdFind;