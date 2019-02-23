/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  // if the length of s && t are only 1 apart
  // check if one is another's substring

  // special cases to short-circuit
  if (s === t) {
    return false;
  }

  // if the length is equal
  // find if there's only 1 spot that these two are different.
  const sLength = s.length;
  const tLength = t.length;

  // if they aren't even same length or only 1 away from each other, then short circuit

  if (sLength === tLength && sLength === 0) {
    return false;
  }

  if (sLength - tLength > 1 || tLength - sLength > 1) {
    return false;
  }

  if (tLength > sLength) {
    let temp = t;
    t = s;
    s = temp;
  }

  if (sLength)

  let usedOneEdit = false;
  for (let wordIndex = 0; wordIndex < s.length; wordIndex++) {
    if (s[wordIndex] !== t[wordIndex] && !usedOneEdit) {
      if (sLength !== tLength) {
        t = t.slice(0, wordIndex) + s[wordIndex] + t.slice(wordIndex);
      }
      usedOneEdit = true;
    } else if (s[wordIndex] !== t[wordIndex]) {
      return false;
    }
  }
  return usedOneEdit;
};

console.log(isOneEditDistance('ab', 'acb'));
console.log(isOneEditDistance('cab', 'ad'));
console.log(isOneEditDistance('1203', '1213'));
console.log(isOneEditDistance('', 'A'));
