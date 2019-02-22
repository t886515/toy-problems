const checkPalindrome = (str) => {
  const loop = str.length % 2 === 0 ? str.length / 2 : Math.floor(str.length / 2);
  for (let i = 0; i < loop; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const longestPalindrome = (s) => {
  
};

console.log(checkPalindrome('abcddcba'));

