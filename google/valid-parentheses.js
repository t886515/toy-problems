/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const mapParentheses = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(mapParentheses[s[i]]);
    } else if (s[i] === '}' || s[i] === ']' || s[i] === ')') {
      let matchOne = stack.pop();
      if (matchOne !== s[i]) return false;
    }
  }
  return stack.length === 0;
};
