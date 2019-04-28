/**
 * @param {string} s
 * @return {string}
 */

// var decodeString = function (s) {
//   let finalString = '';
//   let counter = 0;
//   let repeatValue = '';

//   while (counter < s.length) {
//     if (!isNaN(Number(s[counter]))) {
//       repeatValue += s[counter];
//       counter++;
//     } else if (s[counter] === '[') {
//       counter++;
//       finalString += findNewStringWhileAddToFinals(Number(repeatValue), s);
//       repeatValue = '';
//     } else {
//       if (s[counter] !== ']') {
//         finalString += s[counter];
//       }
//       counter++;
//     }
//   }

//   function findNewStringWhileAddToFinals(repeatValue, string) {
//     let currString = '';
//     let nextRepeatValue = '';
//     while (string[counter] !== ']') {
//       if (!isNaN(Number(string[counter]))) {
//         nextRepeatValue += string[counter];
//       } else if (s[counter] === '[') {
//         counter++;
//         currString += findNewStringWhileAddToFinals(
//           Number(nextRepeatValue),
//           string
//         );
//         nextRepeatValue = '';
//       } else {
//         currString += string[counter];
//       }
//       counter++;
//     }
//     return currString.repeat(repeatValue);
//   }

//   return finalString;
// };

var decodeString = function(s) {
  let counter = 0;
  function findNewStringWhileAddToFinals(string, outer) {
    let currString = '';
    let nextRepeatValue = '';
    while (counter < s.length) {
      if (!isNaN(Number(string[counter]))) {
        nextRepeatValue += string[counter];
        counter++;
      } else if (s[counter] === '[') {
        counter++;
        let subStr = findNewStringWhileAddToFinals(string);
        currString += subStr.repeat(nextRepeatValue);
        nextRepeatValue = '';
      } else if (s[counter] === ']') {
        counter++;
        break;
      } else {
        currString += string[counter];
        counter++;
      }
    }
    return currString;
  }

  return findNewStringWhileAddToFinals(s, true);
};

// const decodeStringHelper = arr => {
//   let num = 0;
//   let curr;
//   let returnStr = '';
//   while (arr.length > 0) {
//     curr = arr.shift();
//     if (curr ^ (0 == curr)) {
//       num = num * 10 + parseInt(curr);
//     } else if (curr == '[') {
//       let subStr = decodeStringHelper(arr);
//       returnStr += subStr.repeat(num);
//       num = 0;
//     } else if (curr == ']') {
//       console.log(curr, arr);
//       break;
//     } else {
//       returnStr += curr;
//     }
//   }
//   return returnStr;
// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function(s) {
//   let arr = s.split('');
//   return decodeStringHelper(arr);
// };

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log('abcabccdcdcdef');
console.log(decodeString('10[leetcode]'));
