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

  // Get the first index in the array (the highest number)
  const answer = sortedComputedValues[0];
  console.warn('answer', answer);

  // Answer must be 70720
});