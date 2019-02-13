/**
 * SOLVED BUT NOT REALLY SOLVED?
 **/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

const createIntervals = array => {
  intervalsArray = [];
  array.forEach(ele => {
    const newInterval = new Interval(ele[0], ele[1]);
    intervalsArray.push(newInterval);
  });
  return intervalsArray;
};
var minMeetingRooms = function(intervals) {
  // sort the meeting intervals by start time and end time
  const starts = intervals.concat().sort((a, b) => {
    return a.start - b.start;
  });
  const ends = intervals.slice().sort((a, b) => {
    return a.end - b.end;
  });
  console.log(starts, 'fjdsklfjdlks');
  console.log(ends);
  let rooms = 0;
  let end = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i].start < ends[end].end) {
      console.log(starts[i], ends[end]);
      rooms++;
    } else {
      console.log(starts[i], ends[end], 'for staart i > end[end]');
      end++;
    }
  }
  return rooms;
};

// var minMeetingRooms = function (intervals) {
//   let startArr = intervals.concat().sort((x, y) => {
//     return x.start - y.start;
//   })
//   let endArr = intervals.sort((x, y) => {
//     return x.end - y.end;
//   })
//   let rooms = 0;
//   let end = 0;
//   for (let i = 0; i < intervals.length; i++) {
//     if (startArr[i].start < endArr[end].end) {
//       rooms++;
//     }
//     else end++;
//   }
//   return rooms;
// };

const a = createIntervals([
  [0, 30],
  [5, 10],
  [5, 7],
  [9, 15],
  [10, 30],
  [10, 15],
  [20, 25]
]);
console.log(minMeetingRooms(a));
