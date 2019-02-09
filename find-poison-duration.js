// /**
//  * @param {number[]} timeSeries
//  * @param {number} duration
//  * @return {number}
//  */
// var findPoisonedDuration = function(timeSeries, duration) {
//   if (!timeSeries.length) return 0;
//   let storeValue = 0;
//   let lastValueHighest = timeSeries[0] + duration;
//   let sinceLastLowestSecond = timeSeries[0];
//   timeSeries.slice(1).forEach((timeframe, i) => {
//     if (lastValueHighest < timeframe) {
//       // when its end of array or theres a break, add the previous " stored value" to final store value
//       // find the previous values so far
//       // add curr timeframe - sinceLastLowestSecond + duration to storeValue

//     } else {
//       // if the value after adding the duration is > than the next index, then just continue to next value.

//     }
//     sinceLastLowestSecond = timeframe;
//     lastValueHighest = timeframe + duration;
//   });
//   return storeValue;
// };

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// var findPoisonedDuration = function(timeSeries, duration) {
//   if (!timeSeries.length) return 0;
//   let storeValueObject = {};
//   timeSeries.forEach((timeframe, i) => {
//     for (let i = 0; i < duration; i++) {
//       storeValueObject[timeframe+i] = 1;
//     }

//   });
//   console.log(storeValueObject)
//   return Object.keys(storeValueObject).length;
// };

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (!timeSeries.length) return 0;

  return timeSeries.reduce((storeValue, timeframe, i) => {
    let lastLastingTime = timeSeries[i - 1]
      ? timeSeries[i - 1] + duration
      : timeframe;
    let thisLastingTime = timeframe + duration;
    let y = timeframe > lastLastingTime ? timeframe : lastLastingTime;
    return storeValue + (thisLastingTime - y);
  }, 0);
  // let storeValue = 0;
  // let lastLastingTime = timeSeries[0];
  // timeSeries.forEach((timeframe, i) => {
  //   let thisTimeframeLastingTill = timeframe + duration;
  //   lastLastingTime = timeframe > lastLastingTime? timeframe : lastLastingTime;
  //   storeValue += thisTimeframeLastingTill - lastLastingTime;
  //   lastLastingTime = thisTimeframeLastingTill;

  // });
  // return storeValue;
};

// findPoisonedDuration([1, 4], 2);
findPoisonedDuration([1, 2], 2);
// findPoisonedDuration([1, 2], 2)
