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

const expectedOutcome = (combination) => {
  const [opponent, me] = combination.split(' ');

  // Determine which shape to use
  // based on what the opponent uses
  // and what the outcome expected
  const selfOutcomeMap = {
    [opponentRock]: {
      win: selfPaper,
      lose: selfScissor,
      draw: selfRock,
    },
    [opponentPaper]: {
      win: selfScissor,
      lose: selfRock,
      draw: selfPaper,
    },
    [opponentScissor]: {
      win: selfRock,
      lose: selfPaper,
      draw: selfScissor,
    }
  }

  if (me === selfRock) {
    // I need to lose
    return `${opponent} ${selfOutcomeMap[opponent]['lose']}`
  }

  if (me === selfPaper) {
    // Need to draw
    return `${opponent} ${selfOutcomeMap[opponent]['draw']}`
  }

  if (me === selfScissor) {
    // I need to win
    return `${opponent} ${selfOutcomeMap[opponent]['win']}`
  }
}

const play = (combination) => {
  const [opponent, me] = combination.split(' ');

  // Get score based on 
  // self shape
  const shapeScoreMap = {
    [selfRock]: rockScore,
    [selfPaper]: paperScore,
    [selfScissor]: scissorScore 
  }

  // Create a map for all combination for all possible outcome
  const draw = [`${opponentRock} ${selfRock}`, `${opponentPaper} ${selfPaper}`, `${opponentScissor} ${selfScissor}`];
  const iWin = [`${opponentRock} ${selfPaper}`, `${opponentPaper} ${selfScissor}`, `${opponentScissor} ${selfRock}`];
  const iLost = [`${opponentPaper} ${selfRock}`, `${opponentScissor} ${selfPaper}`, `${opponentRock} ${selfScissor}`];

  if (draw.includes(combination)) {
    // Draw
    return shapeScoreMap[me] + drawScore;
  }

  if (iWin.includes(combination)) {
    // Win
    return shapeScoreMap[me] + winScore;
  }

  if (iLost.includes(combination)) {
    // Lose
    return shapeScoreMap[me] + lostScore;
  }
}

exports.expectedOutcome = expectedOutcome;
exports.play = play;