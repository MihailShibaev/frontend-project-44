/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const askingPlayerName = () => {
  const playerName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${playerName}`);
};
export default askingPlayerName;
