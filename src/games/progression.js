import gameProcess from '../index.js';
import randomIntFromInterval from '../random.js';

const gameInvitation = 'What number is missing in the progression?';
const generateProgression = (firstMember, increment, progressionLength) => {
const progression=[];
for (let i=0; i < progressionLength; i+=1){
    progression.push(firstMember + increment*i);
}
return progression;
};

const gamedataArray = () => {
  const firstMember = randomIntFromInterval(1, 40);
  const increment = randomIntFromInterval(1, 10);
  const progressionLength = randomIntFromInterval(5, 10);
  const hiddenElementIndex = randomIntFromInterval(0, progressionLength-1);
  let progressionArray = generateProgression(firstMember,increment,progressionLength);
  const correctAnswer = progressionArray[hiddenElementIndex];
  //let progressionArray[hiddenElementIndex]='..';
  const question = progressionArray.join(' ').replace(correctAnswer, '..');
  return [question, correctAnswer];
};

const randomProgression = () => {
    gameProcess(gameInvitation, gamedataArray);
  };
  
  export default randomProgression;
  