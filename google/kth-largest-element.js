/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => {
    return a - b;
  });
  return nums[nums.length - k];
};

// some super fast solution - but why is quick sort faster?
var findKthLargest = function(nums, k) {
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
};

function swap(arr, i, j) {
  let temp_i = arr[i];
  arr[i] = arr[j];
  arr[j] = temp_i;
}

function median3(arr, start, end) {
  let middle = Math.floor((end + start) / 2);
  if (arr[middle] < arr[start]) {
    swap(arr, start, middle);
  }
  if (arr[end] < arr[start]) {
    swap(arr, start, end);
  }
  if (arr[end] < arr[middle]) {
    swap(arr, middle, end);
  }
  if (middle !== end - 1) {
    swap(arr, middle, end - 1);
  }
  return arr[end - 1];
}

function quickSort(arr, start, end) {
  // 退出条件：要排序的部分长度比两个还小，即只有一个数要排序
  // 临界条件：刚好有两个数要排序，end-start最小为1
  if (end - start < 1) return;
  // 相邻两个要比较排序
  if (end - start === 1) {
    if (arr[start] > arr[end]) {
      swap(arr, start, end);
    }
    return;
  }
  // 找到主元 并将主元放在end-1处
  let pivot = median3(arr, start, end);
  if (end - start === 2) return;

  // 使用后面++i和--j, 所以初始值这样设定
  let i = start;
  let j = end - 1;

  while (i < j) {
    // 注意与主元对比相等时，如[0,0,0,0]，有两种处理：
    // 1:不交换，继续往前走，这样虽然避免了更多次交换，但是每次主元位置都只能向前一位，递归次数多，而且会出不了循环,
    // 2:停下来交换，这样交换次数多而递归次数少
    // 选择第二种，效率优先，但是要注意i++和j--保证要执行，应该要用++i, 所以一开始的i和j要设为i=start和j=end-1
    while (arr[++i] < pivot) {}
    while (arr[--j] > pivot) {}
    // 找到了该相互交换位置的两个
    if (i <= j) {
      swap(arr, i, j);
    } else {
      swap(arr, i, end - 1);
      break;
    }
  }

  // 注意递归时的开始和结束下标！[start, i-1],[i],[i+1, end]
  quickSort(arr, start, i - 1);
  quickSort(arr, i + 1, end);
}
