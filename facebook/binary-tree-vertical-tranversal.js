/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
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
    let leftValue = array.shift();
    let rightValue = array.shift();
    let currentNode = nodesQueue.shift();
    currentNode.left = new TreeNode(leftValue);
    nodesQueue.push(currentNode.left);
    currentNode.right = new TreeNode(rightValue);
    nodesQueue.push(currentNode.right);
  }
  return root;
};

// const handleResult = (columnNumber, node, queue, col) => {
//   if (node.val === null) return;
//   queue.push([node, columnNumber]);
//   col[columnNumber]
//     ? col[columnNumber].push(node.val)
//     : (col[columnNumber] = [node.val]);
// };

var verticalOrder = function(root) {
  if (root === null) return [];
  // const col = { 0: [root.val] };
  const col = {};
  const queue = [[root, 0]];
  let trackLowest = 0;
  while (queue.length) {
    // first we collect right and left child and put them in queue while determining their col number
    let [currentNode, columnNum] = queue.shift();
    col[columnNum]
      ? col[columnNum].push(currentNode.val)
      : (col[columnNum] = [currentNode.val]);

    // console.log(currentNode);
    if (currentNode.left && currentNode.left.val !== null) {
      queue.push([currentNode.left, columnNum - 1]);
      trackLowest =
        currentNode.left.val && columnNum - 1 < trackLowest
          ? columnNum - 1
          : trackLowest;
    }
    if (currentNode.right && currentNode.right.val !== null) {
      queue.push([currentNode.right, columnNum + 1]);
    }
  }
  let finalArray = [];
  for (let i = trackLowest; i < Object.keys(col).length + trackLowest; i++) {
    finalArray.push(col[i]);
  }
  return finalArray;
};

const example1 = createTreeFromArray([3, 9, 20, null, null, 15, 7]);
console.log(verticalOrder(example1));
