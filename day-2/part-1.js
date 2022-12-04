const start = require('../utils').fileReader;
const play = require('./utils').play;

start('day-2/input.txt', (data) => {
  // Get the array version of the input
  const arr = data.split('\n');

  // Compute the score
  const scoresArr = arr.map(item => play(item));
  console.warn('scoresArr', scoresArr);

  // Get sum
  const totalScore = scoresArr.reduce((a, b) => a + b);
  console.warn('answer', totalScore);

  // Answer must be 13675
});