/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // DFS

  // tranverse to the very bottom for left or right, and compute the depth.
  // after every tranverse, check on the left and right value. if the depth diff is > 1, then break and return false

  let isBalanced = true;
  if (root === null) return true;

  function DFS(currentNode, depth) {
    let leftDepth = depth;
    let rightDepth = depth;

    if (currentNode.left) {
      leftDepth = DFS(currentNode.left, depth + 1);
    }
    if (currentNode.right) {
      rightDepth = DFS(currentNode.right, depth + 1);
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      isBalanced = false;
    }
    return Math.max(leftDepth, rightDepth);
  }
  DFS(root, 0);

  return isBalanced;
};
