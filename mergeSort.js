function mergeSort(arr){
  
  function split(arr) {
    var midIndex = Math.floor(arr.length/2);
    var array1 = arr.slice(0, midIndex);
    var array2 = arr.slice(midIndex);
    
    if (array1.length > 1 || array2.length > 1) {
      return merge(split(array1), split(array2))
      // split(array1);
      // split(array2);
    }
    return merge(array1, array2);
    // console.log(array1, 'im first');
    // console.log(array2);
    // console.log(merge(array1, array2), 'im merging');
    
  }

  return split(arr);
  
  function merge(array1, array2) {
    var sorted = [];
    if (array1.length === 0) {
      return array2;
    }
    while (array1.length || array2.length) {
      if (array1[0] <= array2[0] || !array2.length) {
        sorted.push(array1[0]);
        array1.shift();
      } else {
        sorted.push(array2[0]);
        array2.shift();
      }
    }
    return sorted;
  }
  
}
// function merge(array1, array2) {
//     var sorted = [];
//     while (array1.length || array2.length) {
//       if (array1[0] <= array2[0] || !array2.length) {
//         sorted.push(array1[0]);
//         array1.shift();
//       } else {
//         sorted.push(array2[0]);
//         array2.shift();
//       }
//     }
//     return sorted;
//   }

console.log(mergeSort([4, 7, 4, 2, 9, 8, 3]));