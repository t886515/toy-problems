/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 // recursive iteration
 var uniquePaths = function(m, n) {
   if (m === 1 || n === 1) {
     return 1;
   }
   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
 };

// construct the entire board iteration
var uniquePaths = function(m, n) {
  const board = new Array(m).fill().map(() => new Array(n).fill(1));

  for (let x = 1; x < board.length; x++) {
    for (let y = 1; y < board[x].length; y++) {
      board[x][y] = board[x - 1][y] + board[x][y - 1];
    }
  }
  return board[m - 1][n - 1];
};
