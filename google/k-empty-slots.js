/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
// var kEmptySlots = function(flowers, k) {
//   // let gardenPots = new Array(flowers.length).fill(false);
//   let gardenPots = [];
//   let finalSmallestDay = flowers.length + 1;
//   for (let i = 0; i < flowers.length; i++) {
//     gardenPots[flowers[i] - 1] = i + 1;
//   }
//   console.log(gardenPots);
//   let leftPot = 0;
//   let rightPot = k + 1;
//   for (let i = 0; i < gardenPots.length - k; i++) {
//     // find the bigger one from left and right
//     // compare the bigger one to the rest -> if bigger one is bigger than the rest
//     let biggerDay =
//       gardenPots[leftPot] > gardenPots[rightPot]
//         ? gardenPots[leftPot]
//         : gardenPots[rightPot];

//     let smallest = Math.min(
//       biggerDay,
//       ...gardenPots.slice(leftPot + 1, rightPot)
//     );

//     if (biggerDay === smallest) {
//       finalSmallestDay =
//         biggerDay < finalSmallestDay ? biggerDay : finalSmallestDay;
//     }
//     leftPot++;
//     rightPot++;
//   }
//   return finalSmallestDay === flowers.length + 1 ? -1 : finalSmallestDay;
// };
// practice sliding windows
var kEmptySlots = function(flowers, k) {
  // let gardenPots = new Array(flowers.length).fill(false);
  let gardenPots = [];
  let finalSmallestDay = flowers.length + 1;
  for (let i = 0; i < flowers.length; i++) {
    gardenPots[flowers[i] - 1] = i + 1;
  }
  console.log(gardenPots);
  let leftPot = 0;
  let rightPot = k + 1;
  for (let i = 0; i < gardenPots.length - k; i++) {
    // find the bigger one from left and right
    // compare the bigger one to the rest -> if bigger one is bigger than the rest
    let biggerDay =
      gardenPots[leftPot] > gardenPots[rightPot]
        ? gardenPots[leftPot]
        : gardenPots[rightPot];

    let smallest = Math.min(
      biggerDay,
      ...gardenPots.slice(leftPot + 1, rightPot)
    );

    if (biggerDay === smallest) {
      finalSmallestDay =
        biggerDay < finalSmallestDay ? biggerDay : finalSmallestDay;
    }
    leftPot++;
    rightPot++;
  }
  return finalSmallestDay === flowers.length + 1 ? -1 : finalSmallestDay;
};

// function checkForGardenPotsSpaces(gardenPots, k) {
//   let count = 0;
//   let counting = false;
//   let last = false;
//   for (let i = gardenPots.length - 1; i >= 0; i--) {
//     if (last && !gardenPots[i]) {
//       // starting counting when last one is true &&
//       counting = true;
//     } else if (!last && gardenPots[i]) {
//       // if last one is false && current one is true
//       // check if the empty slots found matches k.
//       if (k === count) {
//         return true;
//       }
//       // reset counter
//       count = 0;
//       counting = false;
//     }
//     if (counting && !gardenPots[i]) {
//       // if its counting && current one is false;
//       count++;
//     }

//     last = gardenPots[i];
//   }
//   return false;
// }

console.log(kEmptySlots([1, 3, 2], 1));
console.log(kEmptySlots([6, 5, 8, 9, 7, 1, 10, 2, 3, 4], 2));
// console.log(
//   checkForGardenPotsSpaces(
//     [true, true, false, true, true, true, false, false, false, true],
//     2
//   )
// );
