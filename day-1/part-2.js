const start = require('../utils').fileReader;
const solve = require('./core').solve;

start('day-1/input.txt', (data) => {
  // Split the large string using \n to get the proper grouping
  const arr = data.split('\n');

  const sortedComputedValues = solve(arr);
  console.warn('sortedComputedValues', sortedComputedValues);

  // Get first 3 index (first 3 highest)
  const top3 = sortedComputedValues.splice(0, 3);
  const answer = top3.reduce((a, b) => a + b);
  console.warn('answer', answer);

  // Answer must be 207148
});