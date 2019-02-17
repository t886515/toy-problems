/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//   if (!nums.length) return 0;
//   let last = nums[0];
//   let maxCount = 0;
//   let tempCount = last ? 1 : 0;

//   for (let i = 1; i < nums.length; i++) {
//     let cur = nums[i];
//     if (last && !cur) {
//       maxCount = Math.max(maxCount, tempCount);
//       tempCount = 0;
//     } else if (cur) {
//       tempCount++;
//     }
//     last = cur;
//   }
//   return Math.max(maxCount, tempCount);
// };
var findMaxConsecutiveOnes = function(nums) {
  if (!nums.length) return 0;
  let maxCount = 0;
  let p1 = 0;
  let p2 = 0;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([0, 0]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
