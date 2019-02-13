/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Since both arrays are sorted:
// Going from the back of the first array, we start picking up items that are bigger while
// comparing the two array (start from the end so we dont need to deal with the issue with keeping track of the "moved" item as compare the starting from the front)
// And as we are going through , once we are done with the one iteration, everything was compared and sorted.

var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  for (let k = m + n - 1; k >= 0; k--) {
    if (nums2[j] > nums1[i] || i < 0) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
  }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
