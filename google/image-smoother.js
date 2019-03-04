/**
 * @param {number[][]} M
 * @return {number[][]}
 */

var imageSmoother = function(M) {
  let newM = [];
  let xLength = M.length - 1;
  let yLength = M[0].length - 1;
  for (let x = 0; x < M.length; x++) {
    newM[x] = newM[x] || [];
    for (let y = 0; y < M[0].length; y++) {
      newM[x][y] = calculateCurrent(x, y, xLength, yLength, M);
    }
  }
  return newM;
};

function calculateCurrent(x, y, xLength, yLength, M) {
  let sum = 0;
  let count = 0;
  for (let i = -1; i < 2; i++) {
    let baseX = x + i;
    if (baseX < 0 || baseX > xLength) {
      continue;
    }
    for (let j = -1; j < 2; j++) {
      let baseY = y + j;
      if (baseY < 0 || baseY > yLength) {
        continue;
      }
      sum += M[baseX][baseY];
      count++;
    }
  }
  return Math.floor(sum / count);
}

let board = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

// console.log(imageSmoother(board));

board = [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]];
console.log(imageSmoother(board));
