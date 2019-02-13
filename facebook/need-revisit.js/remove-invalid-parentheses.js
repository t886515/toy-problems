/**
 * NOT SOLVED
 **/

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let tracking = 0;
  // if tracking < 0, then pop

  let sArray = s.split('');
  let finalArray = [];

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === '(') {
      tracking++;
    } else if (sArray[i] === ')') {
      tracking--;
    }
    // when i check for tracking, if < 0, this current one im on is an invalid one
    if (tracking < 0) {
      sArray[i] = '';
      tracking = 0;
    }
  }
  finalArray.push(sArray.join(''));

  // console.log(sArray);
  let newSArray = sArray.slice().reverse();
  for (let i = 0; i < newSArray.length; i++) {
    if (newSArray[i] === ')') {
      tracking++;
    } else if (newSArray[i] === '(') {
      tracking--;
    }
    // when i check for tracking, if < 0, this current one im on is an invalid one
    if (tracking < 0) {
      newSArray[i] = '';
      tracking = 0;
    }
  }
  finalArray.push(newSArray.reverse().join(''));
  // do a reverse one
  return finalArray;
};

// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:

// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:

// Input: ")("
// Output: [""]

console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses('(a)())()'));
console.log(removeInvalidParentheses(')('));
