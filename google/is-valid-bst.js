/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const { constructTreeWithArray } = require('../helpers');

var isValidBST = function(root) {
  function dfs(node, lowerLimit, upperLimit) {
    // if reached a null node, knowing its the leave and just return true
    if (node === null) return true;
    const nodeValue = node.val;

    // checking to ensure the current value matches conditions, if not, return false for the last
    // "checks" in the next two conditions - and that will keep returning false all the way up.

    // this lowerLimit has to specific check for null, because in JS, 0 === false
    if (lowerLimit !== null && nodeValue <= lowerLimit) return false;
    if (upperLimit !== null && nodeValue >= upperLimit) return false;

    // if this is the node that is always the outer most, the upperLimit will stay null till end of time. Else, it would start taking in the last last nodeValue, for the left one, and then all the inner ones start having correct limit.
    // Same idea goes with left branch
    if (!dfs(node.right, nodeValue, upperLimit)) return false;
    if (!dfs(node.left, lowerLimit, nodeValue)) return false;

    // also return true for the node if all above condition pass
    return true;
  }
  return dfs(root, null, null);
};

const tree1 = constructTreeWithArray([5, 1, 4, null, null, 3, 6]);
// const tree2 = constructTreeWithArray([2, 1, 3]);
const tree3 = constructTreeWithArray([10, 5, 15, null, null, 6, 20]);

console.log(isValidBST(tree1));
// console.log(isValidBST(tree2));
