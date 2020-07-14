/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  // prv val (undefined)
  // prv val is bigger than prvprv (false)
  // loop through array ->
  // keep value of prv index, keep a bool if prv was bigger than prvprv
  // if curr < prv -> check bool -> if yes, return index, if false, set bool to "false", continue
  // if curr > prv -> set bool to "true", continue
  // always set prv to the curr and move on
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;

  let prevValue = nums[0];
  let prevValueIsBig = false;
  for (let i = 1; i < nums.length; i++) {
    let currValue = nums[i];
    if (currValue > prevValue) {
      prevValueIsBig = true;
    } else {
      if (prevValueIsBig) {
        return i - 1;
      } else {
        prevValueIsBig = false;
      }
    }
    prevValue = currValue;
  }
  return nums.indexOf(Math.max(...nums));
};


// log (O) approach - binary search
// Could try to find peak using binary search since we can return any "peak" (or Max value in any part of the array)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let lowIndex = 0;
  let highIndex = nums.length - 1;
  while (highIndex > lowIndex + 1) {
    let midPoint = Math.floor((lowIndex + highIndex)/2);
    // comparing to the right neighbor at the mid point to figure out which way we are sloping
    if (nums[midPoint] > nums[midPoint + 1]) {
      // left is bigger, its sloping down right, so we take the left part to continue with finding max
      highIndex = midPoint;
    } else {
      // right is bigger, we want to take right portion to continue with the logic
      lowIndex = midPoint;
    }

  }
  return nums[highIndex] > nums[lowIndex] ? highIndex : lowIndex;
};

// other ppl's binary search solutoin
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;
  let lowIndex = 0;
  let highIndex = nums.length - 1;
  while (lowIndex < highIndex) {
    let midPoint = Math.floor((lowIndex + highIndex) / 2);
    // comparing to the right neighbor at the mid point to figure out which way we are sloping
    if (nums[midPoint] > nums[midPoint + 1]) {
      // left is bigger, its sloping down right, so we take the left part to continue with finding max
      highIndex = midPoint;
    } else {
      // right is bigger, we want to take right portion to continue with the logic
      lowIndex = midPoint + 1;
    }
  }
  return lowIndex;
};