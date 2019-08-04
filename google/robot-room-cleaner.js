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

  const visited = [];

  let currentPosition = [0, 0];
  let facingDirection = 'up';

  const updateCurrentPosition = () => {
    currentPosition[0] =
      currentPosition[0] + fourDirections[facingDirection][0];
    currentPosition[1] =
      currentPosition[1] + fourDirections[facingDirection][1];
  };

  const helperTurnRight = () => {
    const turnRightHash = {
      up: 'right',
      down: 'left',
      left: 'up',
      right: 'down'
    };
    robot.turnRight();
    facingDirection = turnRightHash[facingDirection];
  };

  const helperTurnLeft = () => {
    const turnLeftHash = {
      up: 'left',
      down: 'right',
      left: 'down',
      right: 'up'
    };
    robot.turnLeft();
    facingDirection = turnLeftHash[facingDirection];
  };

  // Helper functions

  const goBack = (a, b) => {
    // this cause robot to go to the opposite direction of what it was facing.
    robot.move();
    updateCurrentPosition();
    helperTurnRight();
    helperTurnRight();

    // need to turn to originlPosition!!!!
  };

  const turnRightBack = () => {
    helperTurnRight();
    helperTurnRight();
    robot.move();
    updateCurrentPosition();
    helperTurnRight();
    helperTurnRight();
  };

  const markVisited = () => {
    visited.push(currentPosition.slice());
  };

  const isVisited = () => {
    for (let i = 0; i < visited.length; i++) {
      let visitedTile = visited[i];
      if (
        visitedTile[0] === currentPosition[0] &&
        visitedTile[1] === currentPosition[1]
      )
        return true;
    }
    return false;
  };
  // TODO if already visited, don't need to go on there, treat it as a block and turn back...
  const backtrack = () => {
    let moveCount = 0;
    if (robot.move()) {
      updateCurrentPosition();
      if (!isVisited()) {
        robot.clean();
        markVisited();
        backtrack();
        goBack();
      } else {
        turnRightBack();
      }
    }
    helperTurnLeft();
    if (robot.move()) {
      updateCurrentPosition();
      if (!isVisited()) {
        robot.clean();
        markVisited();
        backtrack();
        goBack();
      } else {
        turnRightBack();
      }
    }
    helperTurnRight();
    helperTurnRight();

    if (robot.move()) {
      updateCurrentPosition();
      if (!isVisited()) {
        robot.clean();
        markVisited();
        backtrack();
        goBack();
      } else {
        turnRightBack();
      }
    }
    helperTurnRight();
    if (robot.move()) {
      updateCurrentPosition();
      if (!isVisited()) {
        robot.clean();
        markVisited();
        backtrack();
        goBack();
      } else {
        turnRightBack();
      }
    }

    // no more place to go! let's return to visited...
  };
  robot.clean();
  markVisited();
  backtrack();
};

// cleaner i-robot :D

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

  const visited = [];

  let currentPosition = [0, 0];
  let facingDirection = 'up';

  const updateCurrentPosition = () => {
    currentPosition[0] =
      currentPosition[0] + fourDirections[facingDirection][0];
    currentPosition[1] =
      currentPosition[1] + fourDirections[facingDirection][1];
  };

  const helperTurnRight = () => {
    const turnRightHash = {
      up: 'right',
      down: 'left',
      left: 'up',
      right: 'down'
    };
    robot.turnRight();
    facingDirection = turnRightHash[facingDirection];
  };

  // Helper functions

  const goBack = (a, b) => {
    // this cause robot to go to the opposite direction of what it was facing.
    helperTurnRight();
    helperTurnRight();

    robot.move();
    updateCurrentPosition();
    helperTurnRight();
    helperTurnRight();

    // need to turn to originlPosition!!!!
  };

  const markVisited = () => {
    visited.push(currentPosition.slice());
  };

  const isVisited = () => {
    for (let i = 0; i < visited.length; i++) {
      let visitedTile = visited[i];
      if (
        visitedTile[0] === currentPosition[0] &&
        visitedTile[1] === currentPosition[1]
      )
        return true;
    }
    return false;
  };
  // TODO if already visited, don't need to go on there, treat it as a block and turn back...
  const backtrack = () => {
    let moveCount = 0;
    for (let i = 0; i < 4; i++) {
      if (robot.move()) {
        updateCurrentPosition();
        if (!isVisited()) {
          robot.clean();
          markVisited();
          backtrack();
        }
        goBack();
      }
      helperTurnRight();
    }
    // no more place to go! let's return to visited...
  };
  robot.clean();
  markVisited();
  backtrack();
};
