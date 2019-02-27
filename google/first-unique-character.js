/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//       return i;
//     }
//   }
//   return -1;
// };
var firstUniqChar = function(s) {
  if (s.length === 0) return -1;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] === undefined ? i : s.length;
  }
  let index = Math.min(Object.values(map));
  return index === s.length ? -1 : index;
};
