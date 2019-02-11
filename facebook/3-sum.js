/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var threeSum = function(nums) {
//   if (nums.length < 3) return [];
//   const finalArray = [];
//   const dupMap = {};
//   for (var i = 0; i < nums.length; i++) {
//     let firstValue = nums[i];
//     for (var k = i + 1; k < nums.length; k++) {
//       let secondValue = nums[k];
//       let thirdValue = (firstValue + secondValue) * -1;
//       if (nums.slice(k + 1).includes(thirdValue)) {
//         const key = [firstValue, secondValue, thirdValue].sort();
//         if (!dupMap[key]) {
//           dupMap[key] = true;
//           finalArray.push(key);
//         }
//       }
//     }
//   }
//   return finalArray;
// };

var threeSum = function(nums) {
  if (nums.length < 3) return [];
  const sortedNums = nums.sort((a, b) => {
    return a - b;
  });
  const finalArray = [];
  const hashIt = {};
  let lastValue;
  for (let i = 0; i < sortedNums.length - 2; i++) {
    let firstValue = sortedNums[i];
    if (firstValue > 0) {
      return finalArray;
    }
    if (firstValue === lastValue) {
      lastValue = firstValue;
      continue;
    }
    let k = i + 1;
    let w = sortedNums.length - 1;
    while (k < w) {
      let secondValue = sortedNums[k];
      let thirdValue = sortedNums[w];
      let sumOfThree = firstValue + secondValue + thirdValue;
      if (sumOfThree === 0) {
        // if the sum of 3 values is zero,
        // pushes set of values to final array
        // move k to the next value, and reset w;
        const newArray = [firstValue, secondValue, thirdValue];
        if (!hashIt[newArray]) {
          finalArray.push(newArray);
          hashIt[newArray] = true;
        }
        k++;
        w = sortedNums.length - 1;
      } else if (sumOfThree > 0) {
        // if sum > 0, means we need w to be a smaller number
        // move w left one
        w--;
      } else {
        // if sum < 0, means we need k to be a bigger number
        // move k right one
        k++;
      }
    }
    lastValue = firstValue;
  }
  return finalArray;
};

// const allCombination = (array, finalArray, memorizeMap, firstValue) => {
//   if (!array.length) {
//     return;
//   }
//   let secondValue = array[0];
//   array.slice(1).forEach(thirdValue => {
//     const sumOfThree = firstValue + secondValue + thirdValue;
//     const mapOfThree = [firstValue, secondValue, thirdValue].sort();
//     if (memorizeMap[mapOfThree]) {
//     }
//   });
//   allCombination(newArray, finalArray, memorizeMap, firstValue);
// };

// threeSum([-1, 0, 1, 2, -1, -4]);
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
