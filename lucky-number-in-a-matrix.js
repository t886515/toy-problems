/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  if (matrix.length === 0) return [];

  const result = [];
  const maxInCol = collectMaxInCol(matrix);

  for (let x = 0; x < matrix.length; x++) {
    const min = Math.min(...matrix[x]);
    const minIndex = matrix[x].indexOf(min);
    maxInCol[minIndex] === min ? result.push(min) : null;
  }

  return result;
};

var collectMaxInCol = function(matrix) {
  const maxInCol = [];
  let lastMax = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      lastMax = lastMax < matrix[j][i] ? matrix[j][i] : lastMax;
    }
    maxInCol[i] = lastMax;
    lastMax = 0;
  }
  return maxInCol;
};
