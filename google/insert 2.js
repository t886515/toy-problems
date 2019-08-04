/**
 * // Definition for a Node.
 * function Node(val,next) {
 *    this.val = val;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */

function Node(val, next) {
  this.val = val;
  this.next = next;
}

const composedListNodes = require('../helpers');
var insert = function(head, insertVal) {
  if (head === null && typeof insertVal === 'number') {
    let newNode = new Node(insertVal, null);
    newNode.next = newNode;
    return newNode;
  }
  let tail = head;
  let firstCycle = true;
  if (tail.next === head) {
    tail.next = new Node(insertVal, head);
    return head;
  }
  // when the head.next is smaller than head -> at the end of cyclical list
  while (tail !== head || firstCycle) {
    if (firstCycle) {
      firstCycle = false;
    }
    if (tail.val < tail.next.val) {
      if (insertVal >= tail.val && insertVal <= tail.next.val) {
        let tempNext = tail.next;
        tail.next = new Node(insertVal, tempNext);
        return head;
      }
    } else if (tail.val > tail.next.val) {
      if (insertVal >= tail.val || insertVal <= tail.next.val) {
        let tempNext = tail.next;
        tail.next = new Node(insertVal, tempNext);
        return head;
      }
      // this is the special case where its end of the list and linking back to the smallest.
    }
    tail = tail.next;
  }
  let tempNext = tail.next;
  head.next = new Node(insertVal, tempNext);
  return head;
};

let L1 = composedListNodes([3, 4, 1], true);
console.log(L1);
console.log(insert(L1, 2));
console.log(L1.next.next.next);
