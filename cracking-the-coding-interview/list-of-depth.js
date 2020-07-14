const { ListNode } = require("../helpers.js");
const { sortedArrayToBT } = require("./minimal-tree");

function listOfDepth(root) {
  const list = [];
  let outerQueue = [root];

  while(outerQueue.length) {
    const head = new ListNode(-1);
    let currListNode = head;
    const innerQueue = [];
    while (outerQueue.length) {
      const currNode = outerQueue.shift();
      currListNode.next = new ListNode(currNode.val);
      currListNode = currListNode.next;
      if (currNode.left) innerQueue.push(currNode.left);
      if (currNode.right) innerQueue.push(currNode.right);
    }
    outerQueue = innerQueue;
    list.push(head.next);
  }
  return list;
}


const x = sortedArrayToBT([1, 3, 4, 5, 6, 7, 8, 9, 14]);
console.log(x);
console.log(listOfDepth(x));