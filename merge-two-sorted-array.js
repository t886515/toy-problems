/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2, result, head) {
  if (!l1 && !l2) return null;
  let pointer1 = l1;
  let pointer2 = l2;
  head = head || new ListNode(0);
  result = result || head;

  if (pointer1 && pointer2) {
    //do comparison and slice

    if (pointer1.val < pointer2.val) {
      // take pointer1's value, add it to result, and point the pointer1 to pointer1's next
      result.next = pointer1;
      result = result.next;
      pointer1 = pointer1.next;
    } else {
      result.next = pointer2;
      result = result.next;
      pointer2 = pointer2.next;
      // do opposite of above
    }
  } else {
    !pointer1 ? (result.next = pointer2) : (result.next = pointer1);
    return head.next;
  }

  return mergeTwoLists(pointer1, pointer2, result, head);
};

// 1->2->4, 1->3->4

var mergeTwoLists = function(L1, L2) {
  const head = new ListNode(0);
  let tail = head;
  while (L1 !== null || L2 !== null) {
    if (L1 === null) {
      tail.next = L2;
      break;
    } else if (L2 === null) {
      tail.next = L1;
      break;
    } else {
      if (L1.val < L2.val) {
        tail.next = L1;
        L1 = L1.next;
      } else {
        tail.next = L2;
        L2 = L2.next;
      }
      tail = tail.next;
    }
  }
  return head.next;
};

L1 = new ListNode(1);
L1.next = new ListNode(2);
L1.next.next = new ListNode(4);

L2 = new ListNode(1);
L2.next = new ListNode(3);
L2.next.next = new ListNode(4);

console.log(mergeTwoLists(L1, L2));
