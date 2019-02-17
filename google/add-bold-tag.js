/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
// var addBoldTag = function(s, dict) {
//   if (dict.length === 0) return s;

//   let rangeCollections = [];
//   for (let word of dict) {
//     let currentWordStarting = s.indexOf(word);
//     while (currentWordStarting !== -1) {
//       currentWordEnding = currentWordStarting + word.length - 1;
//       rangeCollections.push([currentWordStarting, currentWordEnding]);
//       currentWordStarting = s.indexOf(word, currentWordStarting + 1);
//     }
//   }
//   if (rangeCollections.length === 0) return s;
//   console.log(rangeCollections);
//   // process the rangeCollections
//   rangeCollections.sort((a, b) => {
//     return a[0] - b[0];
//   });

//   console.log(rangeCollections);
//   let earlyNode = 0;
//   for (let node = 1; node < rangeCollections.length; node++) {
//     if (rangeCollections[node][0] <= rangeCollections[earlyNode][1] + 1) {
//       if (rangeCollections[node][1] >= rangeCollections[earlyNode][1] + 1) {
//         rangeCollections[earlyNode][1] = rangeCollections[node][1];
//       }
//     } else {
//       earlyNode++;
//       rangeCollections[earlyNode][0] = rangeCollections[node][0];
//       rangeCollections[earlyNode][1] = rangeCollections[node][1];
//     }
//   }
//   console.log(rangeCollections, '???');

//   // use the rangeCollections to compute final string
//   let currentRangeIndex = 0;
//   let finalString = '';
//   for (let i = 0; i < s.length; i++) {
//     if (currentRangeIndex <= earlyNode) {
//       console.log(rangeCollections[currentRangeIndex][0]);
//       if (
//         rangeCollections[currentRangeIndex][0] ===
//           rangeCollections[currentRangeIndex][1] &&
//         rangeCollections[currentRangeIndex][0] === i
//       ) {
//         finalString += '<b>' + s[i] + '</b>';
//         currentRangeIndex++;
//       } else if (rangeCollections[currentRangeIndex][0] === i) {
//         finalString += '<b>' + s[i];
//       } else if (rangeCollections[currentRangeIndex][1] === i) {
//         finalString += s[i] + '</b>';
//         currentRangeIndex++;
//       } else {
//         finalString += s[i];
//       }
//     } else {
//       finalString += s[i];
//     }
//   }
//   return finalString;
// };
var addBoldTag = function(s, dict) {
  if (dict.length === 0) return s;

  let rangeCollections = new Array(s.length).fill(false);
  for (let word of dict) {
    let currentWordStartingIndex = s.indexOf(word);
    while (currentWordStartingIndex !== -1) {
      rangeCollections.fill(
        true,
        currentWordStartingIndex,
        currentWordStartingIndex + word.length
      );
      currentWordStartingIndex = s.indexOf(word, currentWordStartingIndex + 1);
    }
  }

  console.log(rangeCollections);

  // use the rangeCollections to compute final string
  // let currentRangeIndex = 0;
  let finalString = '';
  let inRange = false;

  for (let i = 0; i < rangeCollections.length; i++) {
    if (rangeCollections[i] && !inRange) {
      // inRange were off, and now encounter a true = turn on inRange and add opening ele
      finalString += '<b>' + s[i];
      inRange = true;
    } else if (!rangeCollections[i] && inRange) {
      //turn off inRange and add the closing ele
      finalString += '</b>' + s[i];
      inRange = false;
    } else {
      finalString += s[i];
    }
  }

  return rangeCollections[rangeCollections.length - 1]
    ? finalString + '</b>'
    : finalString;
};

console.log(addBoldTag('abcxyz123', ['abc', '123']));
console.log(addBoldTag('aaabbcc', ['aaa', 'bc', , 'aab']));
console.log(addBoldTag('aaabbcc', ['a', 'b', 'c']));
console.log(addBoldTag('abcdef', ['a', 'c', 'e', 'g']));
