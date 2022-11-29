#!/usr/bin/env node
import askingPlayerName from '../src/cli.js';

import readlineSync from 'readline-sync';

const playerName = askingPlayerName();
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const randomIntFromInterval = (min, max) => {
// min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

const isEven = () => {
const questionNumber = randomIntFromInterval(1, 100);
console.log(`Question: ${questionNumber}`);
const answer = readlineSync.question('Your answer:');
if ((answer === 'yes' && questionNumber %2 === 0) || (answer === 'no' && questionNumber %2 != 0)){
  console.log('Correct!');
  return true;
}
  else {
    let correctAnswer = questionNumber %2 ===0 ? 'yes' : 'no'
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${playerName}!`)
    return false;
  }

}
const brainEven = () => {
const rounds=3;
for (let n=0; n<rounds; n+=1) {
  if (!isEven()) {return false;}
}
console.log(`Congratulations, ${playerName}!`);
return true;
};

brainEven();

