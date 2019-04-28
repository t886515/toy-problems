/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
  let prev = nums[nums.length - 1];
  let saveIndex;
  for (let i = nums.length - 2; i >= 0; i--) {
    let curr = nums[i];
    if (curr < prev) {
      // while i < length -1, keep going. if find one where curr > nums[i], take curr to swap with i - 1.
      saveIndex = i;
      let didSwap = false;
      while (i < nums.length) {
        i++;
        if (curr >= nums[i]) {
          nums[saveIndex] = nums[i - 1];
          nums[i - 1] = curr;
          didSwap = true;
          break;
        }
      }
      // if can't find one, then swap with last one..
      if (!didSwap) {
        nums[saveIndex] = nums[i - 1];
        nums[i - 1] = curr;
      }

      for (
        let j = saveIndex + 1;
        j < Math.floor((saveIndex + nums.length + 1) / 2);
        j++
      ) {
        let tailIndex = nums.length - 1 - (j - (saveIndex + 1));
        let temp = nums[j];
        nums[j] = nums[tailIndex];
        nums[tailIndex] = temp;
      }
      return nums;
      // after the while loop to swap (or jsut didnt even swap)...
      // reverse value after i - so i + 1 - nums.length, reverse all the way through..
    }
    prev = curr;
  }
  return nums.reverse();
};

// console.log(nextPermutation([1, 2, 3]));
// console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 5, 1]));
// console.log(nextPermutation([1, 3, 2]));
console.log(nextPermutation([2, 3, 1]));
