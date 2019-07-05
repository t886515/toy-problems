/**
 * @param {number[][]} grid
 * @return {number}
 */
// var islandPerimeter = function(grid) {
//   // to determine how each 1 would adds to final perimeter, it's the 4 - # of 1 attaches to it
//   // starting from the first 1 found, do a dfs to go through every single island and addes them all up
  
//   if (!grid.length) return 0;
  
//   const fourDirections = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
//   let perimeter = 0;
  
//   const checkValid = (i, len) => {
//       return i >= 0 && i < len;
//   }
  
//   const calculate = (x, y) => {
//       // first, check for the number of perimeter this island is contributing to total
//       let currPeri = 4;
//       for (let i = 0; i < fourDirections.length; i++) {
//           let xDiff = fourDirections[i][0];
//           let yDiff = fourDirections[i][1];
//           let newX = x + xDiff;
//           let newY = y + yDiff;

//           if (checkValid(newX, grid.length) && checkValid(newY, grid[0].length)) {
//               if (grid[newX][newY] === 1) {
//                   currPeri--;
//               }
//           }

//       }
//       perimeter += currPeri;
//   }
  
//   for (let x = 0; x < grid.length; x++) {
//       for (let y = 0; y < grid[x].length; y++) {
//           if (grid[x][y] === 1) {
//               calculate(x, y);
//           }
//       }
//   }
//   return perimeter;
  
// };

// why does bfs actually takes longer?
var islandPerimeter = function(grid) {
  // to determine how each 1 would adds to final perimeter, it's the 4 - # of 1 attaches to it
  // starting from the first 1 found, do a dfs to go through every single island and addes them all up
  
  if (!grid.length) return 0;
  
  const fourDirections = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
  let perimeter = 0;
  
  const checkValid = (i, len) => {
      return i >= 0 && i < len;
  }
  
  const bfs = (x, y) => {
      // first, check for the number of perimeter this island is contributing to total

      const queue = [[x, y]];
      const first = `${x},${y}`
      const visited = {};
      visited[first] = true;

      while (queue.length > 0) {
        let currAxis = queue.shift();

        let currX = currAxis[0];
        let currY = currAxis[1];

        let currPeri = 4;
        for (let i = 0; i < fourDirections.length; i++) {
            let xDiff = fourDirections[i][0];
            let yDiff = fourDirections[i][1];
            let newX = currX + xDiff;
            let newY = currY + yDiff;
  
            if (checkValid(newX, grid.length) && checkValid(newY, grid[0].length)) {
                if (grid[newX][newY] === 1 ) {
                    currPeri--;
                    if (!visited[`${newX},${newY}`]) {
                      visited[`${newX},${newY}`] = true;
                      queue.push([newX, newY]);
                    }
                }
            }
  
        }
        perimeter += currPeri;

      }
     
  }
  
  let startingX, startingY;
  for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
          if (grid[x][y] === 1) {
              startingX = x;
              startingY = y;
          };
      }
  }
  bfs(startingX, startingY);
  return perimeter;
  
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));