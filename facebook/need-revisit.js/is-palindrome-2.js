/**
 * NOT SOLVED
 **/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {};

const isPalindrome = (s, notFirstTime) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      // whenever we spot a potential delete
      if (notFirstTime) {
        return false;
      } else {
        // console.log(
        //   notFirstTime,
        //   s.substring(i - 1, j + 1),
        //   s.substring(i, j + 2)
        // );
        console.log(i, j);
        const newStringWithLessJ = s.slice(i, j);
        const newStringWithMoreI = s.slice(i, j + 2);
        console.log(newStringWithLessJ);
        // console.log(newStringWithMoreI);
        // if (newStringWithLessJ.length > 1 && isPalindrome(newStringWithLessJ)) {
        //   j--;
        // } else if (
        //   newStringWithMoreI.length > 1 &&
        //   isPalindrome(newStringWithMoreI)
        // ) {
        //   i++;
        // } else {
        //   return false;
        // }
      }
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome('abca'));
