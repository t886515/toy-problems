/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  let finalSpiral = [];
  let minRow = 0;
  let maxRow = matrix.length - 1;
  let minCol = 0;
  let maxCol = matrix[0].length - 1;
  let direction = 'right';

  while (maxRow >= minRow && maxCol >= minCol) {
    if (direction === 'right') {
      for (let y = minCol; y <= maxCol; y++) {
        finalSpiral.push(matrix[minRow][y]);
      }
      direction = 'down';
      minRow++;
    } else if (direction === 'down') {
      for (let x = minRow; x <= maxRow; x++) {
        finalSpiral.push(matrix[x][maxCol]);
      }
      direction = 'left';
      maxCol--;
    } else if (direction === 'left') {
      for (let y = maxCol; y >= minCol; y--) {
        finalSpiral.push(matrix[maxRow][y]);
      }
      direction = 'up';
      maxRow--;
    } else if (direction === 'up') {
      for (let x = maxRow; x >= minRow; x--) {
        finalSpiral.push(matrix[x][minCol]);
      }
      direction = 'right';
      minCol++;
    }
  }
  return finalSpiral;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
