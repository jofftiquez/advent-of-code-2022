const start = require('../utils').fileReader;
const play = require('./utils').play;
const expectedOutcome = require('./utils').expectedOutcome;

start('day-2/input.txt', (data) => {
  // Get the array version of the input
  const arr = data.split('\n');
  console.warn('arr', arr);
  
  // Map the items to match the expected outcome
  const arrBasedOnExpectedOutcome = arr.map(item => expectedOutcome(item));
  console.warn('arrBasedOnExpectedOutcome', arrBasedOnExpectedOutcome);
  
  // Compute the score
  const scoresArr = arrBasedOnExpectedOutcome.map(item => play(item));
  console.warn('scoresArr', scoresArr);
  
  // Get sum
  const totalScore = scoresArr.reduce((a, b) => a + b);
  console.warn('answer', totalScore);
  
  // Answer must be 14184
});