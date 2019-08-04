/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  const distancesRecords = grid.map(x => {
    return x.map(y => {
      return {
        distance: 0,
        housesHit: 0
      };
    });
  });

  const fourDirections = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const xMax = grid.length - 1;
  const yMax = grid[0].length - 1;
  let totalNumberOfHouses = 0;

  const passAllConditions = (x, y, set) => {
    // starting from house in the grid
    // only push to queue if:

    // if the following 2 doesn't meet, short circuit false
    // 1) it has not yet been visited
    // 2) its not out of bound

    // only return true when the above meet && its a zero
    // 3) it's a zero
    if (x < 0 || x > xMax) {
      return false;
    }
    if (y < 0 || y > yMax) {
      return false;
    }

    if (set.has(x + ',' + y)) {
      return false;
    }

    if (grid[x][y] === 0) {
      return true;
    }
    return false;
  };

  const bfs = (houseCoordinate, visited) => {
    const coordinateQueue = [houseCoordinate];
    while (coordinateQueue.length) {
      const currentCoordinate = coordinateQueue.shift();
      const [x, y, distance] = currentCoordinate;
      distancesRecords[x][y].distance += distance;
      distancesRecords[x][y].housesHit++;
      for (let dir of fourDirections) {
        let [xd, yd] = dir;
        let newX = x + xd;
        let newY = y + yd;
        if (passAllConditions(newX, newY, visited)) {
          coordinateQueue.push([newX, newY, distance + 1]);
          visited.add(newX + ',' + newY);
        }
      }
    }
  };

  // console.log(distancesRecords);
  // going through the grid - for each house encountered, find the distance from it to all the other reachable zeros.
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let distance = 0;
      const coordinate = [x, y, distance];
      // if encounter a house, call bfs to find out about all the distanace from this house to all the possible zeros
      if (grid[x][y] === 1) {
        const visited = new Set();
        totalNumberOfHouses++;
        bfs(coordinate, visited);
      }
    }
  }
  console.log(distancesRecords);

  // find shortest from there..
  let shortest = Infinity;
  for (let x = 0; x < xMax + 1; x++) {
    for (let y = 0; y < yMax + 1; y++) {
      if (
        distancesRecords[x][y].distance !== 0 &&
        distancesRecords[x][y].distance < shortest &&
        distancesRecords[x][y].housesHit === totalNumberOfHouses
      ) {
        shortest = distancesRecords[x][y].distance;
      }
    }
  }
  return shortest === Infinity ? -1 : shortest;
};

console.log(
  shortestDistance([[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]])
);
console.log(shortestDistance([[0, 2, 1], [1, 0, 2], [0, 1, 0]]));
