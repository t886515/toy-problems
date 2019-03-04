/**
 * @param {string} s
 * @return {string}
 */
// var shortestPalindrome = function(s) {
//   let foundPalindrome = false;
//   let tail = s.length - 1;
//   let stack = [];
//   while (tail >= 0 && !foundPalindrome) {
//     foundPalindrome = isPalidrome(s, tail);
//     if (!foundPalindrome) {
//       stack.push(s[tail]);
//       tail--;
//     }
//   }
//   return stack.join('') + s;
// };

// function isPalidrome(s, endIndex) {
//   let tail = endIndex;
//   let head = 0;
//   while (tail > head) {
//     if (s[tail] !== s[head]) {
//       return false;
//     }
//     tail--;
//     head++;
//   }
//   return true;
// }

// console.log(shortestPalindrome('aacecaaa'));
// console.log(shortestPalindrome('abcd'));

function longestPrefix(str) {
  // create a table of size equal to the length of `str`
  // table[i] will store the prefix of the longest prefix of the substring str[0..i]
  var table = new Array(str.length);
  var maxPrefix = 0;
  // the longest prefix of the substring str[0] has length
  table[0] = 0;

  // for the substrings the following substrings, we have two cases
  for (var i = 1; i < str.length; i++) {
    // case 1. the current character doesn't match the last character of the longest prefix
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      console.log(str[i], 'when they arent matching');
      // if that is the case, we have to backtrack, and try find a character  that will be equal to the current character
      // if we reach 0, then we couldn't find a chracter
      maxPrefix = table[maxPrefix - 1];
    }
    // case 2. The last character of the longest prefix matches the current character in `str`
    if (str.charAt(maxPrefix) === str.charAt(i)) {
      console.log(str[i], 'when they are matching');

      // if that is the case, we know that the longest prefix at position i has one more character.
      // for example consider `-` be any character not contained in the set [a-c]
      // str = abc----abc
      // consider `i` to be the last character `c` in `str`
      // maxPrefix = will be 2 (the first `c` in `str`)
      // maxPrefix now will be 3
      maxPrefix++;
      // so the max prefix for table[9] is 3
    }
    table[i] = maxPrefix;
  }
  return table;
}

console.log(longestPrefix('cbabcd'));
