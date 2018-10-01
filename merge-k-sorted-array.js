/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const composedListNodes = require('./helpers.js');

var mergeKLists = function (lists) {
    

};

let L1 = composedListNodes([1, 4, 5]);
let L2 = composedListNodes([1, 3, 4]);
let L3 = composedListNodes([2, 6]);
mergeKLists([L1, L2, L3]);