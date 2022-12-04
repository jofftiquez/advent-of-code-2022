const start = require('../utils').fileReader;
const groupArrayByN = require('../utils').groupArrayByN;
const priorityMap = require('./priority-map.json');

const computeRucksacks = (arr) => {
  // Convert all ruckSack items to array
  const [ruckSack1, ruckSack2, ruckSack3] = arr;
  const ruckSack1Split = ruckSack1.split('');
  const ruckSack2Split = ruckSack2.split('');
  const ruckSack3Split = ruckSack3.split('');

  let badge = null;
  // Iterate through ruckSack1's items
  // and check if each item exists in 
  // both ruckSacks 2, and 3. If yes
  // that's the badge, continue otherwise
  for (let i = 0; i < ruckSack1Split.length; i++) {
    const item = ruckSack1Split[i];
    if (ruckSack2Split.includes(item) && ruckSack3Split.includes(item)) {
      badge = item;
    }
  }
  return badge;
}

start('day-3/input.txt', (data) => {
  // Get the array version of the input
  const arr = data.split('\n');

  // Group the array by 3
  const arrGrouped = groupArrayByN(3, arr);
  
  // Get all the elf badges
  const arrGroupedComputed = arrGrouped.map(arr => computeRucksacks(arr));
  
  // Assign priority scode for each badge
  const arrGroupedComputedPriorities = arrGroupedComputed.map(item => priorityMap[item]);
  
  // Get the summation of the priorities array
  // Answer should be 2644
  const answer = arrGroupedComputedPriorities.reduce((a, b) => a + b);
  console.warn('answer', answer);
});