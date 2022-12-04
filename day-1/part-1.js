const start = require('../utils').fileReader;
const solve = require('./core').solve;

start('day-1/input.txt', (data) => {
  // Split the large string using \n to get the proper grouping
  const arr = data.split('\n');

  const sortedComputedValues = solve(arr);

  // Get the first index in the array (the highest number)
  const answer = sortedComputedValues[0];
  console.warn('answer', answer);

  // Answer must be 70720
});