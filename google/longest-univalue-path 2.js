/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const { constructOneNode, constructTreeWithArray } = require('../binary-tree-constructor');

let longestUnivaluePath = function (root) {
  let longest = 0;

  function dfs(node) {
    if (!node) {
      // if its a null node
      // should just return 0
      return 0;
    }
    // recursively calculate the values of all of the left node
    let leftBranchSum = dfs(node.left);
    // recursively calculate the values of all the right node
    let rightBranchSum = dfs(node.right);

    // we have to re-evaluate right and left amount every scope, because the node
    // value is diff for every scope
    let rightAmount = 0;
    let leftAmount = 0;
    // if there's a left and the left val is still the same, meaning the leftBranchSum can be
    // used for calculating this scope's leftAmount, because it's the same value
    if (node.left !== null && node.left.val === node.val) {
      leftAmount = leftBranchSum + 1;
    }
    // same idea with right node
    if (node.right !== null && node.right.val === node.val) {
      rightAmount = rightBranchSum + 1;
    }
    // Update the final longest value based on scenarios:
    // 1)if left branch is the same value, leftAmount > 0, and right branch is not, rightAmount = 0
    //   so in that case, 0 + leftAmount will be used to calculate max. logic apply other way around for right
    // 2) if both are diff value, then it's just zero
    // 3) if both are the same value, meaning both acc sum are valid, and should add them together to
    //   comeplete the "arrow", since the curr node will be linking the 2 amounts together
    longest = Math.max(longest, leftAmount + rightAmount);

    // this is for last scope's leftBranchSum or rightBranchSum value - so it can be used for parent scope's
    // right left amount evaluation
    return Math.max(leftAmount, rightAmount);
  }
  dfs(root);
  return longest;
};

const tree = constructTreeWithArray([1, 4, 5, 4, 4, null, 5]);
console.log(tree);

console.log(longestUnivaluePath(tree));
