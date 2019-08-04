/**
 * @param {string} digits
 * @return {string[]}
 */
const digitLookUp = [
  [],
  [],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
];

var recursion = function(
  digitIndex,
  digits,
  tempCollections,
  finalCombinations,
  expectedLength
) {
  if (tempCollections.length === expectedLength) {
    finalCombinations.push(tempCollections.join(''));
    return finalCombinations;
  }
  let digit = digits[digitIndex];
  console.log(digit, tempCollections, expectedLength);
  for (let i = 0; i < digitLookUp[digit].length; i++) {
    let currChar = digitLookUp[digit][i];
    tempCollections.push(currChar);
    recursion(
      digitIndex + 1,
      digits,
      tempCollections.slice(),
      finalCombinations,
      expectedLength
    );
    tempCollections.pop();
  }
};

var letterCombinations = function(digits) {
  let finalCombinations = [];
  recursion(0, digits, [], finalCombinations, digits.length);
  return finalCombinations;
};

letterCombinations('23');
