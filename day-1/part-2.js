const fs = require('fs');

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

  // Convert the array to object
  // which each field is a an array 
  // of each number group
  // { '1': [2,3,4], '2': [4,2,3] }
  const groups = {};
  let group = 1;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.warn('element', element);
    if (element) {
      if (!groups[group]?.length) groups[group] = [];
      groups[group].push(+element);
    } else {
      ++group;
    }
  }
  console.warn('groups', groups);

  // Convert the object to 2 dimentional array
  // [[2,3,4], [1,2,3]]
  const groupsArray = Object.values(groups);
  console.warn('groupsArray', groupsArray);
  
  // Map the array and return the sum of each 
  // 2nd dimention array
  // [10, 23, 24]
  const groupsArrayMappedComputed = groupsArray.map(arr => {
    return arr.reduce((a, b) => a + b);
  })
  console.warn('groupsArrayMappedComputed', groupsArrayMappedComputed);

  // Sort the array descending
  const groupsArrayMappedComputedSorted = groupsArrayMappedComputed.sort((a, b) => b - a );
  console.warn('groupsArrayMappedComputedSorted', groupsArrayMappedComputedSorted);

  // Get the top 3
  const top3 = groupsArrayMappedComputedSorted.slice(0,3);
  console.warn('top3', top3);

  // Get sum of top 3
  const top3Sum = top3.reduce((a, b) => a + b);
  console.warn('top3Sum', top3Sum);
});