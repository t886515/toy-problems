/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  // loop through the string, as we going through the string,
  // before 1 dash, its a special case where it could be >= K
  // else, always keep adding to newString whenever count <= K && current item !== "-"
  let newString = '';
  let count = 0;
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] !== '-') {
      if (count < K) {
        newString = S[i].toUpperCase() + newString;
        count++;
      } else {
        count = 1;
        newString = S[i].toUpperCase() + '-' + newString;
      }
    }
  }

  return newString;
};

console.log(licenseKeyFormatting('2-5g-3-J', 2));
console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
