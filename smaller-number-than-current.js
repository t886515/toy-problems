/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  // sort the nums
  // index of the sorted nums
  // compose the new array

  const sortedNums = Array.from(nums).sort((a, b) => a - b);
  return nums.map(num => {
    return sortedNums.indexOf(num);
  });
};
