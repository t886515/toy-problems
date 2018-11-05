// var divide = function(dividend, divisor) {
//   let track = 0;
//   let isNegative = false;
//   if (dividend === 0) {
//     return track;
//   }
//   if (divisor === 1) {
//     return dividend;
//   }
//   if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
//     isNegative = true;
//   }
//   dividend = Math.abs(dividend);
//   divisor = Math.abs(divisor);
//   while (dividend >= divisor) {
//     if (
//       (track > Math.pow(2, 31) - 2 && !isNegative) ||
//       (track > Math.pow(2, 31) - 1 && isNegative)
//     ) {
//       break;
//     }
//     dividend = dividend - divisor;
//     track += 1;
//   }
//   return isNegative ? Number('-' + track) : track;
// };

var divide = function(dividend, divisor) {
  let multiple = 0;
  let isNegative = false;
  if (dividend === 0) {
    return multiple;
  }
  if (divisor === 1) {
    return dividend;
  }

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let currSum = absDivisor;
  let currMul = 1;
  while (absDividend >= absDivisor) {
    if (currSum >= absDividend) {
      currSum = absDivisor;
      currMul = 1;
    } else {
      // this means its increasing in the power of 2
      currSum += currSum;
      currMul += currMul;
    }
    multiple += currMul;
    absDividend -= currSum;
  }
  return isNegative
    ? Number('-' + multiple)
    : multiple > 2147483647
      ? 2147483647
      : multiple;
};

console.log(divide(7, 3));
// console.log(divide(Math.pow(2, 31), 1));
// console.log(divide(2147483647, 1));

console.log(Math.pow(2, 31));
