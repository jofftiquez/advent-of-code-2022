const start = require('../utils').fileReader;
const priorityMap = require('./priority-map.json');

start('day-3/input.txt', (data) => {
  // Get the array version of the input
  const arr = data.split('\n');

  // Map the rucksacks data into a
  // better looking object to easily
  // visualize the mapping of splitted data
  const ruckSacks = arr.map((item) => {
    // Get the middle of each string
    const halfIndex = item.split('').length / 2;

    // Split each string into 2
    // using the halfIndex above
    // E.g. abcdef => [abc, def]
    const [first, second] = [item.slice(0, halfIndex), item.slice(halfIndex)]

    // Convert the first and second part
    // strings into arrays of characters
    // E.g. abc => [a, b, c]
    const firstArr = first.split('');
    const secondArr = second.split('');


    // Get all the intersecting characters
    // from both firstArr and secondArr
    const intersecting = [];
    for (let i = 0; i < firstArr.length; i++) {
      const element = firstArr[i];
      // Check if firstArr's element is
      // present in secondArr array if yes
      // it's an intersection, push it to 
      // intersecting array
      if (secondArr.includes(element)) intersecting.push(element);
    }

    // Set the value of intersecting array to
    // container uniqueIntersecting by default
    // in case intersecting array only has 1 element
    let uniqueIntersecting = intersecting;

    // Do additional check if intersecting has more than 1 element
    if (intersecting.length > 1) {
      // Look for unique intersecting elements
      // E.g. intersecting array might contain
      // 2 or more similar values it should be simplified first
      // to avoid incorrect computation of priorities sum
      // E.g. [a, a, b, c] => [a, b, c]
      // [a, a, a] => [a]
      // [a, a, b] => [a, b]
      const unique = [];
      for (let i = 0; i < intersecting.length; i++) {
        const currentElem = intersecting[i];
        // First element is surely unique at some point so set it as first value immediately
        if (i === 0) unique.push(currentElem);
        // If the unique array does not include
        // the currentElem, it means it can be
        // unique as well, continue checking for all
        // iteration
        if (!unique.includes(currentElem)) unique.push(currentElem);
      }
      // Set new uniqu value
      uniqueIntersecting = unique;
    }
    // Get the priorities for each uniqueIntersecting items
    // See mapping in ./priority-map.json
    const uniqueIntersectingPriorities = uniqueIntersecting.map(item => priorityMap[item]);
    // Get the summation of  uniqueIntersectingPriorities
    const uniqueIntersectingPrioritiesSum = uniqueIntersectingPriorities.reduce((a, b) => a + b);

    // Return an easier to read mapped object
    return {
      first: firstArr,
      second: secondArr,
      intersecting: uniqueIntersecting,
      uniqueIntersectingPriorities,
      uniqueIntersectingPrioritiesSum,
    };
  });

  // Map all the uniqueIntersectingPrioritiesSum
  const ruckSacksIntersectingItemsPrioritiesSums = ruckSacks.map(item => item.uniqueIntersectingPrioritiesSum);
  console.warn('ruckSacks', ruckSacksIntersectingItemsPrioritiesSums);

  // Get the summation ruckSacksIntersectingItemsPrioritiesSums to get the answer
  const answer = ruckSacksIntersectingItemsPrioritiesSums.reduce((a, b) => a + b);

  // Answer should be 7701
  console.warn('answer', answer);
});