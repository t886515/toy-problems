/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let rememberXY = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let numberOfNeighbors = countSurrounding(board, i, j);
      if (statusShouldChange(i, j, board, numberOfNeighbors)) {
        rememberXY.push([i, j]);
      }
    }
  }
  for (let index of rememberXY) {
    board[index[0]][index[1]] = board[index[0]][index[1]] === 0 ? 1 : 0;
  }
  return board;
};

function countSurrounding(board, x, y) {
  const combinations = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1]
  ];
  let count = 0;
  for (let roundNode of combinations) {
    let newX = x + roundNode[0];
    let newY = y + roundNode[1];
    if (
      isValidIndex(newX, newY, board.length, board[0].length) &&
      board[newX][newY]
    ) {
      count++;
    }
  }
  return count;
}

function isValidIndex(x, y, xLength, yLength) {
  if (x >= 0 && y >= 0 && x < xLength && y < yLength) {
    return true;
  }
}

function statusShouldChange(i, j, board, numberOfNeighbors) {
  if (
    (board[i][j] && numberOfNeighbors > 3) ||
    (board[i][j] && numberOfNeighbors < 2) ||
    (!board[i][j] && numberOfNeighbors === 3)
  ) {
    return true;
  }
}

// prettier-ignore
console.log(gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]))
