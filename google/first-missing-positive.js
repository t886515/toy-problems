/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums.length) return 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      if (nums[i] > nums.length) {
        nums[i] = undefined;
      }
      while (nums[i] !== i && nums[i] !== undefined && nums[i] > -1) {
        swap(nums, nums[i], i);
      }
    }
  }
  // starting from index 1 --> the first index that doesn't have the right number or is undefined is the missing integer
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== j || nums[j] === undefined) {
      return j;
    }
  }
  // if the array is all sorted without holes inbetween, then it's the next integer, which would be the length of the array itself
  return nums.length;
};

function swap(array, num, index) {
  const temp = array[num];
  array[num] = num;
  array[index] = temp === num ? undefined : temp;
}

// console.log(firstMissingPositive([3, 4, -1, 7, 1, 5]));
// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([2147483647]));
console.log(firstMissingPositive([1, 1]));
