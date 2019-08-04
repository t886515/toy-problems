/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var digitConverter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var computeValue = function(str) {
  let value = 0;
  let lastIndexOfStr = str.length - 1;
  for (let i = lastIndexOfStr; i >= 0; i--) {
    let digit = digitConverter[str[i]];
    console.log(Math.pow(10, lastIndexOfStr - i) * digit);
    value += Math.pow(10, lastIndexOfStr - i) * digit;
  }
  console.log(value, '??');
  return value;
};
var addStrings = function(num1, num2) {
  return computeValue(num1) + computeValue(num2);
};

console.log(addStrings('9333852702227987', '85731737104263'));
