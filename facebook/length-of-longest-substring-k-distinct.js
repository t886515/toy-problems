/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// THIS IS MY OWN ATTEMPT WITH ARRAY INSTEAD OF MAP
// var lengthOfLongestSubstringKDistinct = function(s, k) {
//   if (s === '' || k === 0) return 0;
//   let start = 0;
//   let end = 0;
//   let record = [];
//   let maxValueIndexes = [start, end];
//   s.split('').forEach((char, i) => {
//     // find the index of the item
//     // would === -1 if can't find the item, in this case, memoryIndex < 0 means we need to update the order array
//     let memoryIndex = record.findIndex(({ value }) => {
//       return value === char;
//     });
//     console.log(memoryIndex, 'HEREE');

//     if (record.length > k - 1) {
//       if (memoryIndex > -1) {
//         // when we dont need to unshift and push
//         // but we want to check if index === length-1 --> because if not, then we wanna rearrange order
//         if (memoryIndex !== k - 1) {
//           // if the newly found one isn't the last one on the record array
//           let holdTemp = record[memoryIndex];
//           console.log(record);
//           record = record
//             .slice(0, memoryIndex)
//             .concat(record.slice(memoryIndex + 1));
//           record.push(holdTemp);
//         }
//         end = i;
//       } else {
//         record.shift();
//         record.push({ value: char, index: i });
//         // reset max value indexes if new end - start is bigger;
//         maxValueIndexes =
//           i - start > maxValueIndexes[1] - maxValueIndexes[0]
//             ? [start, end]
//             : maxValueIndexes;
//         start = record[0].index;
//         end = i;
//       }
//     } else {
//       if (memoryIndex < 0) {
//         let newRecord = { value: char, index: i };
//         record.push(newRecord);
//       }
//       end = i;
//     }
//   });
//   if (end && k > 0) {
//     maxValueIndexes =
//       end - start > maxValueIndexes[1] - maxValueIndexes[0]
//         ? [start, end]
//         : maxValueIndexes;
//   }
//   // console.log(start, end);
//   // console.log(maxValueIndexes[0], maxValueIndexes[1]);
//   return s.slice(maxValueIndexes[0], maxValueIndexes[1] + 1);
//   // return maxValueIndexes[1] - maxValueIndexes[0];
// };

// THIS IS FOR FACEBOOK
var lengthOfLongestSubstringKDistinct = function(s, k) {
  // if (s === '' || k === 0) return 0;
  if (s === '' || k === 0) return '';
  let start = 0;
  let end = 0;
  let record = new Map();
  // let record = [];
  let maxValueIndexes = [start, end];
  s.split('').forEach((char, i) => {
    // find the index of the item
    // would === -1 if can't find the item, in this case, memoryIndex < 0 means we need to update the order array
    // record.push()
    console.log(record);
    record.set(char, i);
    if (record.size > k) {
      // look for the one that has the smallest start value, delete that one
      let lowestValue = Math.min(...Array.from(record.values()));
      record.forEach((value, key) => {
        if (value === lowestValue) {
          record.delete(key);
        }
      });
      console.log(lowestValue, record);

      const tempLongest = end - start;
      const histLongest = maxValueIndexes[1] - maxValueIndexes[0];
      console.log(tempLongest, histLongest);
      maxValueIndexes =
        tempLongest > histLongest ? [start, end] : maxValueIndexes;
      // compute and see if the current start and end value is bigger than maxValueIndexes
      // if so, then replace the maxValueIndexes

      // reset start
      start = lowestValue + 1;
    }
    end = i;
  });
  if (end) {
    maxValueIndexes =
      end - start > maxValueIndexes[1] - maxValueIndexes[0]
        ? [start, end]
        : maxValueIndexes;
  }
  // return maxValueIndexes[1] - maxValueIndexes[0] + 1;
  return s.slice(maxValueIndexes[0], maxValueIndexes[1] + 1);
};

// THIS IS FOR ACTUAL LEETCODE QUESTION
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (s === '' || k === 0) return 0;
  let start = 0;
  let maxValue = 0;
  let record = new Map();
  s.split('').forEach((char, i) => {
    // find the index of the item
    // would === -1 if can't find the item, in this case, memoryIndex < 0 means we need to update the order array
    // record.push()
    record.set(char, i);
    if (record.size > k) {
      // look for the one that has the smallest start value, delete that one
      let lowestValue = Math.min(...Array.from(record.values()));
      record.forEach((value, key) => {
        if (value === lowestValue) {
          record.delete(key);
        }
      });
      const tempLongest = i - start;
      maxValue = tempLongest > maxValue ? tempLongest : maxValue;
      // compute and see if the current start and end value is bigger than maxValueIndexes
      // if so, then replace the maxValueIndexes

      // reset start
      start = lowestValue + 1;
    }
  });
  const tempLongest = s.length - start;
  maxValue = tempLongest > maxValue ? tempLongest : maxValue;
  return maxValue;
};

let s = 'eceba';
let k = 2;

console.log(lengthOfLongestSubstringKDistinct(s, k));

s = 'aabbbcccd';
k = 2;
console.log(lengthOfLongestSubstringKDistinct(s, k));

s = 'aa';
k = 1;
console.log(lengthOfLongestSubstringKDistinct(s, k));
s = 'aa';
k = 0;
console.log(lengthOfLongestSubstringKDistinct(s, k));
s = 'bacc';
k = 2;
console.log(lengthOfLongestSubstringKDistinct(s, k));
s = 'abaccc';
k = 2;
console.log(lengthOfLongestSubstringKDistinct(s, k));
