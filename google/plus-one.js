/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let beenAdded = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 > 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  if (digits[0] === 0) {
    digits[0] = 1;
    digits.push(0);
  }

  return digits;
};

console.log(plusOne([9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
