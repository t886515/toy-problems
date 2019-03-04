/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = function(s) {
  const numberRegex = /^[0-9]$/;
  if (s.length === 0) return false;
  if (s.length === 1 && !numberRegex.test(s[0])) return false;
  s = s.trim();
  let canE = true;
  let canDecimal = true;
  let hadNumber = false;
  for (let i = 0; i < s.length; i++) {
    if (numberRegex.test(s[i])) {
      if (!hadNumber) {
        hadNumber = true;
      }
      continue;
    } else {
      if (s[i] === 'e') {
        if (i !== 0 && i !== s.length - 1 && canE && hadNumber) {
          canE = false;
          continue;
        }
      } else if (s[i] === '.') {
        if (canE && canDecimal) {
          canDecimal = false;
          continue;
        }
      } else if (s[i] === '+' || s[i] === '-') {
        if (
          (i === 0 || (s[i - 1] && s[i - 1] === 'e')) &&
          s[i + 1] &&
          (numberRegex.test(s[i + 1]) || s[i + 1] === '.')
        ) {
          continue;
        }
      }
      return false;
    }
  }
  return hadNumber;
};

console.log(isNumber('0'));

console.log(isNumber('abc'));
console.log(isNumber('2e10'));
console.log(isNumber('1 a'));
console.log(isNumber(' -90e3   '));
console.log(isNumber(' 1e'));
console.log(isNumber('e3'));

console.log(isNumber(' 6e-1'));
(' 99e2.5 ');
('53.5e93');
(' --6 ');
('-+3');
('95a54e53');

('.e1');
('+.');
('+e');
