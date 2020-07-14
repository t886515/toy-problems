/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isListPalindrome = list => {
  let head = 0;
  let tail = list.length - 1;
  while (tail > head) {
    if (list[tail] !== list[head]) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
};

var isPalindrome = function(head) {
  const list = [];

  let curr = head;
  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }

  return isListPalindrome(list);
};

// TODO: O(1) space approach?