/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let y = 0;
  let x = 0;
  // first, get the shortest strs and determine how big would y go
  // looping through all str in strs, checking until
  // 1) y goes to end
  // 2) find out theres false, take y then - 1 and read that from first str for final result
  let shortestY = strs.reduce((acc, str) => {
    return str.length < acc ? str.length : acc;
  }, strs[0].length);
  while (y < shortestY) {
    for (x = 0; x < strs.length - 1; x++) {
      if (strs[x][y] !== strs[x + 1][y]) {
        return strs[x].slice(0, y);
      }
    }
    y += 1;
  }

  return strs[0] ? strs[0].slice(0, y) : '';
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
