/**
 * @param {number[]} height
 * @return {number}
 */
// const calculateWaterValue = (array, num1, num2) => {
//   const substractFromThisNum = Math.min(num1, num2);
//   console.log(array, num1, num2);
//   return array.reduce((sum, num) => {
//     return (sum += substractFromThisNum - num);
//   }, 0);
// };

var trap = function(height) {
  let finalWater = 0;
  if (!height.length) return finalWater;
  let leftCurrent = 0;
  let rightCurrent = height.length - 1;
  let leftWall = height[leftCurrent];
  let rightWall = height[rightCurrent];
  while (leftCurrent <= rightCurrent) {
    // when the current left highest wall is smaller than the current right highest wall
    console.log(leftWall, leftCurrent, rightWall, rightCurrent);
    if (leftWall < rightWall) {
      if (height[leftCurrent] < leftWall) {
        // when the current left wall is smaller than highest left wall...
        finalWater += leftWall - height[leftCurrent];
      } else {
        // when the current left wall is bigger or equal to the highest left wall
        leftWall = height[leftCurrent];
      }
      // we keep going through values from the left.. because we know right has the "highest" value at the moment
      leftCurrent++;
    } else {
      if (height[rightCurrent] < rightWall) {
        finalWater += rightWall - height[rightCurrent];
      } else {
        rightWall = height[rightCurrent];
      }
      // we keep going through values starting from right, because we know left now has the highest value
      rightCurrent--;
    }
  }
  return finalWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
