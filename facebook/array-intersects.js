/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let collection1 = nums1.reduce((col, num) => {
    col[num] ? (col[num] = col[num] + 1) : (col[num] = 1);
    return col;
  }, {});
  return nums2.reduce((array, num) => {
    if (collection1[num]) {
      array.push(num);
      collection1[num]--;
    }
    return array;
  }, []);
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
