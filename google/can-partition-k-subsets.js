/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  // if the length isn't even bigger than 0, false.
  if (nums.length <= 0) return false;

  // get the sum of the numbers - if the sum of the numbers devide by k is a whole number, then it's possible, else false.
  const sumOfNumbers = nums.reduce((sum, num) => {
    return (sum += num);
  }, 0);
  if (sumOfNumbers % k !== 0) return false;

  // find the targeting number that serves as the based case
  const target = sumOfNumbers / k;

  // sort the number, so when we try to pick up smaller nums to fill up to target, it would be faster
  nums.sort((a, b) => {
    return a - b;
  });

  // find the last item in the sorted array - if its bigger than the target,
  // its false.
  let lastItemIndex = nums.length - 1;
  if (nums[lastItemIndex] > target) return false;

  // NOT FOR THIS QUESTION
  // this is the set of final sets for validation

  // special case: if the last item on the array is equivalent to the target
  // we can take it out and that can be a set
  // if there's none fine, proceed to use search function
  while (lastItemIndex >= 0 && nums[lastItemIndex] === target) {
    lastItemIndex--;
    k--;
  }
  const newGroup = new Array(k).fill(0);
  // const newGroup = [];
  let count = 0;
  return recurseToSearchTargets(newGroup, lastItemIndex, nums, target);
  function recurseToSearchTargets(groups, row, nums, target) {
    if (row < 0) return true;
    count++;
    let v = nums[row--];
    for (let i = 0; i < groups.length; i++) {
      if (groups[i] + v <= target) {
        console.log('=====Before:', groups, row, count);
        groups[i] += v;
        if (recurseToSearchTargets(groups, row, nums, target)) return true;
        groups[i] -= v;
        // count++;
        console.log('=====After:', groups);
      }
      if (groups[i] == 0) break;
    }
    return false;
  }

  // function recurseToSearchTargets(currentNums, target, k) {
  //   // when we are at a place where we find all the pairs, return true
  //   if (k === 0) {
  //     console.log(finalSet);
  //     return true;
  //   }

  //   // something that finds sets in the array that could match target - if none match, return false

  //   const lastItemIndex = currentNums.length - 1;
  //   const currentSet = [lastItemIndex];
  //   t = target - currentNums[lastItemIndex];
  //   let sum = 0;
  //   for (let z = 0; currentNums[z] <= t; z++) {
  //     sum += currentNums[z];
  //     if (currentNums[z] === t) {
  //       currentSet.push(z);
  //       break;
  //     } else if (sum === t) {
  //       currentSet.push([z]);
  //       break;
  //     }
  //   }
  //   console.log(currentNums, target);
  //   console.log(currentSet);
  //   if (currentSet.length > 1) {
  //     let lastValue = currentSet[1];
  //     if (Array.isArray(lastValue)) {
  //       currentSet.pop();
  //       for (let i = 0; i < lastValue[0]; i++) {
  //         currentSet.push(i);
  //       }
  //       currentNums = currentNums.slice(lastValue[0], currentSet[0]);
  //     } else {
  //       const firstPart = currentNums.slice(0, lastValue);
  //       const secondPart = currentNums.slice(lastValue, currentSet[0]);
  //       currentNums = firstPart.concat(secondPart);
  //     }
  //     finalSet.push(currentSet);
  //     return recurseToSearchTargets(currentNums, target, k - 1);

  //     // get all indexes
  //     // get these out of numsArray
  //     // recursively calls itself with k--
  //   } else {
  //     return false;
  //   }
  // }
};

// console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
console.log(canPartitionKSubsets([10, 10, 10, 7, 7, 7, 7, 7, 7, 6, 6, 6], 3));
