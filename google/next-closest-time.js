/**
 * @param {string} time
 * @return {string}
 */
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  // for the values:
  // first H is between 0-2

  // second H is between 0-3 for 2
  // but if first between 0-1, can be 0-9

  // third m is between 0-5

  let timeArray = time.split('');
  timeArray.splice(2, 1);
  timeArray = timeArray.map(str => {
    return Number(str);
  });
  console.log(timeArray);
  let sortedNum = [...timeArray].sort();

  // check on the last m value
  if (timeArray[3] !== sortedNum[3]) {
    timeArray[3] = sortedNum[sortedNum.lastIndexOf(timeArray[3]) + 1];
    return processFinalString(timeArray);
  }
  // check on the second to last m value
  if (
    timeArray[2] !== sortedNum[3] &&
    sortedNum[sortedNum.lastIndexOf(timeArray[2]) + 1] < 6
  ) {
    timeArray[2] = sortedNum[sortedNum.lastIndexOf(timeArray[2]) + 1];
    timeArray[3] = sortedNum[0];
    return processFinalString(timeArray);
  }

  // check on the HH value. handle them together
  if (timeArray[0] < 2) {
    // when the first # is 0 or 1, this can range from 0 - 9
    console.log('here');
    if (timeArray[1] !== sortedNum[3]) {
      timeArray[1] = sortedNum[sortedNum.lastIndexOf(timeArray[1]) + 1];
    } else if (timeArray[sortedNum.lastIndexOf(timeArray[0]) + 1] < 3) {
      timeArray[0] = sortedNum[sortedNum.lastIndexOf(timeArray[0]) + 1];
      timeArray[1] = sortedNum[0];
    } else {
      timeArray[0] = sortedNum[0];
      timeArray[1] = sortedNum[0];
    }
  } else {
    // when the first # is 2, this can only range from 0 - 3
    if (sortedNum[sortedNum.lastIndexOf(timeArray[1]) + 1] < 4) {
      timeArray[1] = sortedNum[sortedNum.lastIndexOf(timeArray[1]) + 1];
    } else {
      timeArray[0] = sortedNum[0];
      timeArray[1] = sortedNum[0];
    }
  }
  // once we have decide on the HH values, make sure the mm are the smallest
  timeArray[2] = sortedNum[0];
  timeArray[3] = sortedNum[0];
  return processFinalString(timeArray);
};

function processFinalString(timeArray) {
  return timeArray
    .slice(0, 2)
    .concat([':'])
    .concat(timeArray.slice(2))
    .join('');
}

// function theNumberAfterCurrent()

// console.log(nextClosestTime('19:34'));
// console.log(nextClosestTime('23:59'));
// console.log(nextClosestTime('20:48'));
console.log(nextClosestTime('15:55'));
