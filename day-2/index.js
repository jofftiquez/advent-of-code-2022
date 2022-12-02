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

const roll = (combination) => {
  const lostScore = 0;
  const drawScore = 3;
  const winScore = 6;

  const rockScore = 1;
  const paperScore = 2;
  const scissorScore = 3;

  const opponentRock = 'A';
  const opponentPaper = 'B';
  const opponentScissor = 'C';

  const selfRock = 'X';
  const selfPaper = 'Y';
  const selfScissor = 'Z';

  const shapeScoreMap = {
    [selfRock]: rockScore,
    [selfPaper]: paperScore,
    [selfScissor]: scissorScore 
  }
  
  const [opponent, me] = combination.split(' ');

  console.warn('shapeScoreMap[me]', shapeScoreMap[me]);

  const draw = [`${opponentRock} ${selfRock}`, `${opponentPaper} ${selfPaper}`, `${opponentScissor} ${selfScissor}`];
  const iWin = [`${opponentRock} ${selfPaper}`, `${opponentPaper} ${selfScissor}`, `${opponentScissor} ${selfRock}`];
  const iLost = [`${opponentPaper} ${selfRock}`, `${opponentScissor} ${selfPaper}`, `${opponentRock} ${selfScissor}`];

  if (draw.includes(combination)) {
    return shapeScoreMap[me] + drawScore;
  }

  if (iWin.includes(combination)) {
    return shapeScoreMap[me] + winScore;
  }

  if (iLost.includes(combination)) {
    return shapeScoreMap[me] + lostScore;
  }
}

read('day-2/input.txt', (data) => {
  // Split the large string using \n to get the proper grouping
  const arr = data.split('\n');
  const scoresArr = arr.map(item => roll(item));
  console.warn('scoresArr', scoresArr);
  const totalScore = scoresArr.reduce((a, b) => a + b);
  console.warn('asnwer', totalScore);
});