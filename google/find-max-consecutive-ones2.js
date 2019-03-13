var findMaxConsecutiveOnes = function(nums) {
  let maxValue = 0;
  let beforeZero = 0;
  let afterZero = 0;

  for (let i = 0; i < nums.length; i++) {
    afterZero++;
    if (!nums[i]) {
      beforeZero = afterZero;
      afterZero = 0;
    }
    maxValue =
      maxValue < beforeZero + afterZero ? beforeZero + afterZero : maxValue;
  }
  return maxValue;
};
