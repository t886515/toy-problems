/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (!n) return false;
  let x = 0;
  while (Math.pow(3, x) < n) {
    console.log(Math.pow(3, x), x);
    x++;
  }
  return Math.pow(3, x) === n
};

console.log(isPowerOfThree(34))
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(3))
console.log(isPowerOfThree(81))
console.log(isPowerOfThree(45))