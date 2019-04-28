/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {

  const fourDirections = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
  };

  const oppositeDirectionHash = {

  }
  const visited = [[0, 0]];

  let currentPosition = [0, 0];
  let facingDirection = "up";

  const updateCurrentPosition() {
      currentPostion[0] = currentPostion[0] + fourDirections[facingDirection][0];
      currentPostion[1] = currentPostion[1] + fourDirections[facingDirection][1];
  };

  const helperTurnRight = () => {
      const turnRightHash = {
          up: 'right',
          down: 'left',
          left: 'up',
          right: 'down'
      }
      robot.turnRight();
      facingDirection = turnRightHash[facingDirection];
  }

  const helperTurnLeft = () => {
      const turnLeftHash = {
          up: 'left',
          down: 'right',
          left: 'down',
          right: 'up'
      }
      robot.turnLeft();
      facingDirection = turnLeftHash[facingDirection];
  }


  // Helper functions

  const goBack = () => {
      // this cause robot to go to the opposite direction of what it was facing.
      helperTurnRight();
      robot.move();
      updateCurrentPosition();
      helperTurnRight();
      helperTurnRight();

      // need to turn to originlPosition!!!!
  }

  const markVisited = () => {
      visited.push(currentPostion);
  }

  const checkVisited = () => {
      for (let i = 0; i < visited.length; i++) {
          let visitedTile = visited[i];
          if (visitedTile[0] === currentPostion[0] && visitedTile[1] === currentPostion[1]) return true;
      }
      return false;
  }
  // TODO if already visited, don't need to go on there, treat it as a block and turn back...
  const backtrack = () => {

      if (robot.move()) {
          updateCurrentPosition();
          if (!checkVisited) {
              robot.clean();
          }
          markVisited();
          backtrack();
          goBack();
      }
      helperTurnLeft();
      if (robot.move()) {
          updateCurrentPosition();
          if (!checkVisited) {
              robot.clean();
          }
          markVisited();
          backtrack();
          goBack();

      }
      helperTurnRight();
      helperTurnRight();
      if (robot.move()) {
          updateCurrentPosition();
          if (!checkVisited) {
              robot.clean();
          }
          markVisited();
          backtrack();
          goBack();

      }
      // no more place to go! let's return to visited...
  }

  // backtrack();

};
