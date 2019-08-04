// var kthGrammar = function(N, K, notFirst, theString) {
//   if (N === 1) {
//     return theString[K - 1];
//   }
//   if (!notFirst) {
//     return kthGrammar(N - 1, K, true, '0');
//   }
//   let newString = '';
//   for (let i = 0; i < theString.length; i++) {
//     if (theString[i] === '0') {
//       newString += '01';
//     } else {
//       newString += '10';
//     }
//   }
//   return kthGrammar(N - 1, K, true, newString);
// };

var kthGrammar = function(N, K) {
  if (N === 1) return 0;
  if (N === 2) {
    if (K === 1) {
      return 0;
    } else {
      return 1;
    }
  }
  return kthGrammar(N - 1, Math.floor((K + 1) / 2)) === 0 ? 1 - (K % 2) : K % 2;
};

console.log(kthGrammar(4, 5), '///');
