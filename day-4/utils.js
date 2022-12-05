exports.getPairs = (arr) => {
  // Map the pairs to get the start and end of each assigment
  const pairs = arr.map(item => {
    const [pair1, pair2] = item.split(',');
    const [pair1Start, pair1End] = pair1.split('-');
    const [pair2Start, pair2End] = pair2.split('-');
    
    // Convert the starts and ends
    // to number
    return {
      pair1Start: +pair1Start,
      pair1End: +pair1End,
      pair2Start: +pair2Start,
      pair2End: +pair2End
    };
  });
  console.warn('pairs', pairs);
  
  return pairs;
}