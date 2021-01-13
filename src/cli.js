import readlineSync from 'readline-sync';

// Wait for user's response.
export default function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello ${userName}!`);
}
