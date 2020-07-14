const { TreeNode } = require("../helpers.js");

function sortedArrayToBT(nums) {
  const root = new TreeNode(-1);

  function populate(nums, parent, direction, h, t) {
    const m = Math.ceil((h + t) / 2);
    const value = nums[m];
    const currNode = new TreeNode(value);
    if (direction === "left") {
      parent.left = currNode;
    }
    if (direction === "right") {
      parent.right = currNode;
    }

    // left array
    const leftAmount = m - h;
    if (leftAmount > 1) {
      populate(nums, currNode, "left", h, m - 1);
    } else if (leftAmount === 1) {
      currNode.left = new TreeNode(nums[h]);
    }

    // right array
    const rightAmount = t - m;
    if (rightAmount > 1) {
      populate(nums, currNode, "right", m + 1, t);
    } else if (rightAmount === 1) {
      currNode.right = new TreeNode(nums[t]);
    }
  }
  populate(nums, root, "left", 0, nums.length - 1);
  return root.left;
}

const x = sortedArrayToBT([1, 2, 5, 6, 7, 9, 10, 88, 100, 134]);
// console.log(x);

module.exports = {
  sortedArrayToBT
}