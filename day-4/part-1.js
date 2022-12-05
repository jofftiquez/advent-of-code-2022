const start = require('../utils').fileReader;
const getPairs = require('./utils').getPairs;

const fullContained = (item) => {
  const {
    pair1Start,
    pair1End,
    pair2Start,
    pair2End
  } = item;

  // Pair 1 full contains all assignments in pair 2
  const pair1FullContainsPair2 = pair1Start <= pair2Start && pair1End >= pair2End;

  // Pair 2 full contains all assignments in pair 1
  const pair2FullContainsPair1 = pair2Start <= pair1Start && pair2End >= pair1End;

  // Either pair or pair 2 full contains the other
  return pair1FullContainsPair2 || pair2FullContainsPair1;
}

start('day-4/input.txt', (data) => {
  // Get the array version of the input
  const arr = data.split('\n');

  // Get pairs
  const pairs = getPairs(arr);

  // Get fully contained pairs
  const overlaps = pairs.map(item => fullContained(item));

  // Filter all fully contained pairs
  const fullyContainedPairs = overlaps.filter(item => item);
  console.warn('fullyContainedPairs', fullyContainedPairs);

  // Get summation of all fully contained pairs
  const answer = fullyContainedPairs.reduce((a, b) => a + b);
  console.warn('answer', answer);
});
