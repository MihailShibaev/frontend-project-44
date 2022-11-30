import readlineSync from 'readline-sync';

const rounds = 3; //у каждой игры 3 раунда

const gameProcess = (gameInvitation, gamedataArray) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameInvitation);
  for (let n = 0; n < rounds; n += 1) {
    const [question, correctAnswer] = gamedataArray();
    console.log('Question:', question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } 
      else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
  return true;
};

export default gameProcess;