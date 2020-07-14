/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
// first iteration
var printLinkedListInReverse = function(head) {
  let curr = head;
  recurseToGet(curr);
};

var recurseToGet = curr => {
  if (curr.getNext() !== null) {
    recurseToGet(curr.getNext());
  }
  curr.printValue();
};

// second iteration

var printLinkedListInReverse = function(head) {
  if (head.getNext() !== null) {
    printLinkedListInReverse(head.getNext());
  }
  head.printValue();
};
