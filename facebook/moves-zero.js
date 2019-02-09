/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pointerX = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pointerX] = nums[i];
      pointerX += 1;
    }
  }
  for (let y = pointerX; y < nums.length; y++) {
    nums[y] = 0;
  }
  return nums;
};

var moveZeroes = function(nums) {
  let slowPointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[slowPointer];
      nums[slowPointer] = nums[i];
      nums[i] = temp;
      slowPointer += 1;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
