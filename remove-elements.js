var removeElement = function(nums, val) {
  let originalLength = nums.length;
  let dynamicLength = originalLength - 1;
  for (let i = 0; i < originalLength; i++) {
    let hold = nums.shift();
    console.log(hold);
    if (hold !== val) {
      nums[dynamicLength] = hold;
    } else {
      dynamicLength -= 1;
    }
  }
  return nums;
};
