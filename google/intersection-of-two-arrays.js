/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let finalResult = [];
  let map = nums1.reduce((acc, num) => {
    acc[num] = true;
    return acc;
  }, {});
  nums2.forEach(num => {
    if (map[num]) {
      finalResult.push(num);
      map[num] = false;
    }
  });
  return finalResult;
};

// https://leetcode.com/problems/intersection-of-two-arrays/
