// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }

//     get

//     ComposeListNode(valArray) {
//         //uses
//         console.log(this)
//         let list = new this.ListNode(0);
//         valArray.reduce(val => {
//             list.next = new this.ListNode(val);
//             return list.next;
//         }, list);
//         return list.next;
//     }
// }

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const composedListNodes = (valArray, createCylical) => {
  let list = new ListNode(0);
  let last;
  valArray.reduce((acc, val, index) => {
    acc.next = new ListNode(val);
    if (index === valArray.length - 1) {
      last = acc.next;
    }
    return acc.next;
  }, list);
  if (createCylical) {
    last.next = list.next;
  }
  return list.next;
};

module.exports = composedListNodes;
