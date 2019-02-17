/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  // have A repeat itself until its length > B
  // after that, repeats itself 2 more times , if none of these have luck, return -1
  let firstRepeatTimes =
    A.length > B.length ? 1 : Math.ceil(B.length / A.length);
  let trialString = A.repeat(firstRepeatTimes);
  for (let i = 0; i < 3; i++) {
    if (trialString.includes(B)) {
      return firstRepeatTimes + i;
    }
    trialString += A;
  }
  return -1;
};

var repeatedStringMatch = function(A, B) {
  // have A repeat itself until its length > B
  // after that, repeats itself 2 more times , if none of these have luck, return -1
  let trialString = A;
  let count = 1;
  while (B.length > trialString.length) {
    trialString += A;
    count++;
  }

  if (trialString.includes(B)) {
    return count;
  }
  trialString += A;
  if (trialString.includes(B)) {
    return count + 1;
  }

  return -1;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
