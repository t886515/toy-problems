/**
 * NOT SOLVED
 **/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const createTreeFromArray = array => {
  let nodesQueue = [];
  // building root
  let nodeValue = array.shift();
  let root = new TreeNode(nodeValue);
  nodesQueue.push(root);

  while (array.length) {
    console.log(array);
    let leftValue = array.shift();
    let rightValue = array.length ? array.shift() : null;
    let currentNode = nodesQueue.shift();
    currentNode.left = new TreeNode(leftValue);
    nodesQueue.push(currentNode.left);
    currentNode.right = new TreeNode(rightValue);
    nodesQueue.push(currentNode.right);
  }
  return root;
};

// const a = createTreeFromArray([1, 2, 1]);
// const b = createTreeFromArray([1, 1, 2]);
// const c = createTreeFromArray([1, 2, 3]);
// const d = createTreeFromArray([1, 2, 3]);
const e = createTreeFromArray([1, 2]);
const f = createTreeFromArray([1, null, 2]);

var isSameTree = function(p, q) {
  // check for 3 rare edge cases
  if (p === null && q === null) {
    return true;
  } else if (p === null) {
    return false;
  } else if (q === null) {
    return false;
  }
  console.log(p);
  console.log(q);
  let queueA = [p];
  let queueB = [q];
  while (queueA.length > 0) {
    let currentPNode = queueA.shift();
    let currentQNode = queueB.shift();
    if (currentPNode.val !== currentQNode.val) {
      return false;
    }
    if (currentPNode.left && currentQNode.left) {
      queueA.push(currentPNode.left);
      queueB.push(currentQNode.left);
    }
    if (currentPNode.right && currentQNode.right) {
      queueA.push(currentPNode.right);
      queueB.push(currentQNode.right);
    }
  }
  if (queueB.length) return false;
  return true;
};

// console.log(isSameTree(a, b));
// console.log(isSameTree(c, d));
console.log(isSameTree(e, f));
