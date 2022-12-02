const fs = require('fs');
const roll = require('./utils').roll;

// Use fs to read the file
const read = (file, callback) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    callback(data);
  });
}

read('day-2/input.txt', (data) => {
  // Get the array version of the input
  const arr = data.split('\n');

  // Compute the score
  const scoresArr = arr.map(item => roll(item));
  console.warn('scoresArr', scoresArr);

  // Get sum
  const totalScore = scoresArr.reduce((a, b) => a + b);
  console.warn('answer', totalScore);

  // Answer must be 13675
});