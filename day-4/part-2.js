const start = require('../utils').fileReader;
const getPairs = require('./utils').getPairs;

const overlapping = (item) => {
  const {
    pair1Start,
    pair1End,
    pair2Start,
    pair2End
  } = item;

  // Convert pair range to
  // number array
  // E.g. 2-4 => [2,3,4]
  const pair1Sections = [];
  for (let i = pair1Start; i <= pair1End; i++) {
    pair1Sections.push(i);
  }
  
  // Convert pair range to
  // number array
  // E.g. 2-4 => [2,3,4]
  const pair2Sections = [];
  for (let i = pair2Start; i <= pair2End; i++) {
    pair2Sections.push(i);
  }

  // Check if any section in pair 1 to range is
  // existing in pair 2 range
  const overlappingSections = [];
  for (let i = 0; i < pair1Sections.length; i++) {
    const section = pair1Sections[i];
    if (pair2Sections.includes(section)) overlappingSections.push(true);
  }
  console.warn('overlappingSections', overlappingSections);

  // Use double negation to convert 
  // object to its Boolean equivalent
  // E.g. !!1 => true, !!undefined => false, !!0 => false, !!2 => true
  return !!overlappingSections.length;
}

start('day-4/input.txt', (data) => {
  // Get the array version of the input
  const arr = data.split('\n');

  // Get pairs
  const pairs = getPairs(arr);

  // Compute overlapping items
  const overlaps = pairs.map(item => overlapping(item));

  // Filter all fully contained pairs
  const fullyContainedPairs = overlaps.filter(item => item);

  // Get summation of all fully contained pairs
  const answer = fullyContainedPairs.reduce((a, b) => a + b);
  console.warn('answer', answer);
});
