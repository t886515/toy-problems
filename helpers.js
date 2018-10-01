
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

const composedListNodes = (valArray) => {
    let list = new ListNode(0);
    valArray.reduce((acc, val) => {
        acc.next = new ListNode(val);
        return acc.next;
    }, list);
    return list.next;

}

module.exports = composedListNodes;

