/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  // nums.sort();
  let finalResult = [[]];
  // const currentSpecial = [];
  // for (let i = 0; i < nums.length; i++) {
  //   backTracking(nums, finalResult, i);
  // }
  const backTracking = (nums, i, currentComb) => {
    if (i >= nums.length) {
      return;
    }

    // console.log(nums);
    for (let x = 0; x < nums.length; x++) {
      currentComb.push(nums[x]);
      console.log(currentComb, '??');
      console.log(finalResult, 'before');
      finalResult.push(currentComb.slice());
      console.log(finalResult, 'after');
      backTracking(nums.slice(x + 1), i, currentComb);
      console.log('========reach here=========');
      currentComb.pop();
    }
  };
  backTracking(nums, 0, []);
  return finalResult;
};

console.log(subsets([1, 2, 3, 4]));
