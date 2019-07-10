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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// var findIndexToInsert = function(val, array) {
//   if (!array.length) {
//     return 0;
//   }
//   let head = 0;
//   let tail = array.length;

//   while (tail > head + 1) {
//     let mid = Math.floor((tail - head) / 2);
//     if (val > array[mid]) {
//       head = mid + 1;
//     } else {
//       tail = mid;
//     }
//   }
//   console.log(tail, head);

//   //even
//   // if (array.length % 2 === 0) {
//   //     if (array.length === 2) {
//   //         //if val > both 0 && 1, return index + 2
//   //         // if val > 0 only, return index + 1;
//   //         // if non of above, return index;
//   //         return
//   //     }
//   //     let midMore = array.lenght / 2;
//   //     let midLess = midMore - 1;
//   //     if (val <= array[midLess]) {
//   //         return findIndexToInsert(val, array.slice(0, midLess))
//   //     } else {

//   //     }

//   //     //odd
//   // } else {
//   //     if (array.length === 1) {
//   //         console.log(array, val)
//   //         return val >= array[0] ? index + 1 : index;
//   //     }

//   //     let mid = Math.floor(array.length / 2);
//   //     console.log('?', array, mid, index)
//   //     if (val < array[mid]) {
//   //         let newArray = array.slice(0, mid);
//   //         return findIndexToInsert(val, newArray, mid-1);
//   //     } else {
//   //         let newArray = array.slice(mid+1);
//   //         return findIndexToInsert(val, newArray, index+mid+1);
//   //     }

//   //
// };

// console.log(findIndexToInsert(2, [1, 1, 1, 3, 3, 4, 5], 0));

// var mergeKLists = function(lists) {
//   //for preventing side effect purpose, .slice() lists
//   // const cloneLists = lists.slice();
//   // const finalList = new ListNode(0);

//   // const valHash = cloneLists.map((list)=>{
//   //     return list.val;
//   // })
//   // console.log(valHash);

//   // have a head of the final list that will be returned
//   // create an array of all the current values from the entire lists
//   // do a Math.min for that list( or a function that would find the index of the val that has the loweset number)
//   // use the index of that item to:
//   // attach it to the final list
//   // access that specific linked list from lists, and find its next value, and use it to update the hash array's value

//   // do so untill all null
//   // if at a scenario where there's only 1 item from lists that aren't null
//   // take that and append that entire thing to final lists

//   // return finalList.next;

//   //return final list.next

//   //priority q approach..

//   // looping throguh everything
//   // add them to an array that has all the value
//   // sort along the way of composing it
//   // create a list from there

//   const valArray = [];
//   const cloneLists = lists.slice();
//   cloneLists.reduce((valArray, list) => {
//     let track = list;
//     while (track !== null) {
//       // instead of push, do some checks on where it should be
//       // and splice!
//       // let index = findIndexToInsert(track.val, valArray);
//       // valArray.splice(index, 0, track.val);
//       valArray.push(track.val);
//       track = track.next;
//     }

//     return valArray;
//   }, valArray);
//   valArray.sort((a, b) => {
//     return a - b;
//   });

//   const final = new ListNode(0);
//   let trackPoint = final;
//   valArray.forEach(val => {
//     trackPoint.next = new ListNode(val);
//     trackPoint = trackPoint.next;
//   });
//   return final.next;
// };
var mergeKLists = function(lists, lowIndex = 0, highIndex = lists.length - 1) {
  if (lists.length === 0) return null;
  //base case
  console.log(highIndex, lowIndex);
  if (highIndex === lowIndex) {
    return lists[lowIndex];
    // return mergeTwoLists(lists[lowIndex], lists[highIndex]); // the list
  }
  const mid = Math.floor((highIndex + lowIndex) / 2);
  const left = mergeKLists(lists, lowIndex, mid);
  const right = mergeKLists(lists, mid + 1, highIndex);
  return mergeTwoLists(left, right);
};

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

let L1 = composedListNodes([1, 4, 5]);
let L2 = composedListNodes([1, 3, 4]);
let L3 = composedListNodes([2, 6]);

const test = mergeKLists([L1, L2, L3]);
console.log('TEST:', test);

let listArray = [[], [-1, 5, 11], [], [6, 10]];
let lists = listArray.map(list => {
  return composedListNodes(list);
});

console.log(mergeKLists(lists));
