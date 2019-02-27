/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // const regex = /^[a-zA-Z0-9]*$/;
  // clean string
  let cleanString = s.replace(/\s/g, '');
  cleanString = cleanString.replace(/[^0-9a-z\s]/gi, '');
  cleanString = cleanString.toLowerCase();

  let start = 0;
  let end = cleanString.length - 1;
  while (start < end) {
    if (cleanString[start] !== cleanString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
