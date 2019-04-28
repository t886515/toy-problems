// back tracking - exceed time limits
var findAllFourCombinations = function(
  nums,
  target,
  combination,
  result,
  currSum
) {
  if (combination.length === 4) {
    if (currSum === target) {
      result.push(combination);
    }
    return;
  }
  let prev;
  for (let i = 0; i < nums.length; i++) {
    if (prev !== nums[i]) {
      combination.push(nums[i]);
      currSum += nums[i];
      let newNums = nums.slice(i + 1);
      findAllFourCombinations(
        newNums,
        target,
        combination.slice(),
        result,
        currSum
      );
      combination.pop();
      currSum -= nums[i];
    }
    prev = nums[i];
  }
};

// var fourSum = function(nums, target) {
//   if (nums.length < 4) return [];
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   let result = [];
//   findAllFourCombinations(nums, target, [], result, 0);
//   return result;
// };

// n^3 solution

//TODO can be further refactor

var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => {
    return a - b;
  });
  let result = [];
  let prev;
  for (let i = 0; i < nums.length - 3; i++) {
    let curr = nums[i];
    if (prev !== curr) {
      let newTarget = target - curr;
      //let newSetOfNums = nums.slice(i + 1);
      let allPossibleThreeSumSet = findThreeSum(nums, newTarget, i + 1);
      allPossibleThreeSumSet.forEach(set => {
        set.push(nums[i]);
        result.push(set);
      });
    }
    prev = curr;
  }
  return result;
};

// this should return an array of all possible 3 combinations that result in that 1 new target

function findThreeSum(nums, target, newStartingIndex) {
  let prev;
  let result = [];
  for (let i = newStartingIndex; i < nums.length - 2; i++) {
    let curr = nums[i];
    if (prev !== curr) {
      let newTarget = target - curr;
      let allPossibleTwoSumSet = findTwoSum(nums, newTarget, i + 1);
      allPossibleTwoSumSet.forEach(set => {
        set.push(nums[i]);
        result.push(set);
      });
    }
    prev = curr;
  }
  return result;
}

function findTwoSum(nums, target, newStartingIndex) {
  let head = newStartingIndex;
  let tail = nums.length - 1;
  let result = [];
  let prevHead;
  let prevTail;
  while (tail > head) {
    // add a condition that says if nums[tail--] === prev nums[tail], tail -- again
    // this is to prevent duplicate
    let curSum = nums[head] + nums[tail];
    if (curSum > target) {
      prevTail = tail;
      tail--;
    } else if (curSum < target) {
      prevHead = head;
      head++;
    } else {
      if (nums[prevHead] !== nums[head] && nums[prevTail] !== nums[tail]) {
        result.push([nums[head], nums[tail]]);
      }
      prevHead = head;
      prevTail = tail;
      tail--;
      head++;
    }
  }
  return result;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9));

// n^3 solution -> this can definitely be refactored....
