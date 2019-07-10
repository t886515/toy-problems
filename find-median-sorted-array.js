/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const overAllLength = nums1.length + nums2.length;
  const evenLength = overAllLength % 2 === 0;
  let howManyTimesToLoop = evenLength
    ? overAllLength / 2 - 1
    : Math.floor(overAllLength / 2);

  while (howManyTimesToLoop > 0) {
    if (nums1.length && nums2.length) {
      if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
        nums1.pop();
      } else {
        nums2.pop();
      }
    } else if (nums1.length) {
      nums1.pop();
    } else {
      nums2.pop();
    }

    howManyTimesToLoop--;
  }

  let result = [];
  let finalLoop = evenLength ? 2 : 1;
  while (finalLoop > 0) {
    if (nums1.length && nums2.length) {
      if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
        result.push(nums1.pop());
      } else {
        result.push(nums2.pop());
      }
    } else if (nums1.length) {
      result.push(nums1.pop());
    } else {
      result.push(nums2.pop());
    }

    finalLoop--;
  }

  return evenLength ? (result[0] + result[1]) / 2 : result[0];
};

console.log(findMedianSortedArrays([1, 2, 3, 4, 8], [2, 5]));
