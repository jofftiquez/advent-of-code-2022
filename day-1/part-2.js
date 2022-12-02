const fs = require('fs');
const solve = require('./core').solve;

// Use fs to read the file
const read = (file, callback) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    callback(data);
  });
}

read('day-1/input.txt', (data) => {
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