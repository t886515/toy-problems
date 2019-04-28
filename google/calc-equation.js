// /**
//  * @param {string[][]} equations
//  * @param {number[]} values
//  * @param {string[][]} queries
//  * @return {number[]}
//  */

// // constructor for a graph
// class Graph {
//   constructor(value) {
//     this.to = [];
//     this.from = [];
//     this.toAmount = [];
//     this.fromAmount = [];
//     this.visited = false;
//     this.value = value;
//   }
//   addToTo(node, amount) {
//     this.to.push(node);
//     this.toAmount.push(amount);
//   }
//   addToFrom(node, amount) {
//     this.from.push(node);
//     this.fromAmount.push(amount);
//   }
//   findNodeInTo(target) {
//     for (let i = 0; i < this.to.length; i++) {
//       let node = this.to[i];
//       if (node.value === target) return i;
//     }
//     return -1;
//   }
//   findNodeInFrom(target) {
//     for (let i = 0; i < this.from.length; i++) {
//       let node = this.from[i];
//       if (node.value === target) return i;
//     }
//     return -1;
//   }
//   markVisited() {
//     this.visited = true;
//   }
//   unmarkVisited() {
//     this.visited = false;
//   }
// }

// var dfs = function(start, end, hashMap, currentProduct, result) {
//   const startingNode = hashMap[start];
//   if (startingNode.to.length) {
//     if (startingNode.findNodeInTo(end) !== -1) {
//       result.push(
//         currentProduct * startingNode.toAmount[startingNode.findNodeInTo(end)]
//       );
//       return;
//     } else {
//       for (let i = 0; i < startingNode.to.length; i++) {
//         let newStartNode = startingNode.to[i];
//         let newStartNodeValue = startingNode.to[i].value;
//         if (!newStartNode.visited) {
//           startingNode.markVisited();
//           currentProduct =
//             currentProduct *
//             startingNode.toAmount[startingNode.findNodeInTo(newStartNodeValue)];
//           dfs(newStartNodeValue, end, hashMap, currentProduct, result);
//           currentProduct =
//             currentProduct /
//             startingNode.toAmount[startingNode.findNodeInTo(newStartNodeValue)];
//           startingNode.unmarkVisited();
//         }
//       }
//     }
//   }
//   if (startingNode.from.length) {
//     if (startingNode.findNodeInFrom(end) !== -1) {
//       result.push(
//         currentProduct *
//           startingNode.fromAmount[startingNode.findNodeInFrom(end)]
//       );
//       return;
//     } else {
//       for (let i = 0; i < startingNode.from.length; i++) {
//         let newStartNode = startingNode.from[i];
//         let newStartNodeValue = startingNode.from[i].value;
//         if (!newStartNode.visited) {
//           startingNode.markVisited();
//           currentProduct =
//             currentProduct *
//             startingNode.fromAmount[
//               startingNode.findNodeInFrom(newStartNodeValue)
//             ];
//           dfs(newStartNodeValue, end, hashMap, currentProduct, result);
//           currentProduct =
//             currentProduct /
//             startingNode.fromAmount[
//               startingNode.findNodeInFrom(newStartNodeValue)
//             ];
//           startingNode.unmarkVisited();
//         }
//       }
//     }
//   }
//   // if theres no more to and from and all is visted
// };

// var calcEquation = function(equations, values, queries) {
//   // create a hashMap that has all the graph node with the correct to and from, and also its value hashed
//   // in the hashMap
//   const hashMap = equations.reduce((map, edge, index) => {
//     // first item on an edge
//     let firstItem = edge[0];
//     let firstItemAmount = values[index];
//     let secondItem = edge[1];
//     let secondItemAmount = 1 / values[index];

//     if (!map[firstItem]) {
//       map[firstItem] = new Graph(firstItem);
//     }
//     if (!map[secondItem]) {
//       map[secondItem] = new Graph(secondItem);
//     }
//     map[firstItem].addToTo(map[secondItem], firstItemAmount);
//     map[secondItem].addToFrom(map[firstItem], secondItemAmount);
//     return map;
//   }, {});

//   return queries.map(query => {
//     let start = query[0];
//     let end = query[1];
//     const cleanHashMap = Object.assign({}, hashMap);
//     if (start !== end) {
//       if (hashMap[start] && hashMap[end]) {
//         let result = [];
//         dfs(start, end, cleanHashMap, 1, result);
//         return result.length? result[0] : -1 ;
//       } else {
//         return -1;
//       }
//     } else {
//       return hashMap[start] ? 1 : -1;
//     }
//   });

//   // this graph structure helps with dfs
// };
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

let dfs = function (start, end, hashMap, currentProduct, result) {
  const startingNode = hashMap[start];
  if (startingNode.relationships.length) {
    if (startingNode.relationships.includes(end)) {
      const indexOfEndValue = startingNode.relationships.indexOf(end);
      result.push(currentProduct * startingNode.relationshipsValues[indexOfEndValue]);
    }
    for (let i = 0; i < startingNode.relationships.length; i++) {
      const newStartValue = startingNode.relationships[i];
      const hashMapNode = hashMap[newStartValue];
      if (!hashMapNode.visited) {
        startingNode.visited = true;
        currentProduct *= startingNode.relationshipsValues[i];
        dfs(newStartValue, end, hashMap, currentProduct, result)
        currentProduct /= startingNode.relationshipsValues[i];
        startingNode.visited = false;
      }
    }
  }
};

let constructHashMapObject = function () {};

let calcEquation = function (equations, values, queries) {
  // create a hashMap that has all the graph node with the correct to and from, and also its value hashed
  // in the hashMap
  const hashMap = equations.reduce((map, edge, index) => {
    // first item on an edge
    let firstItem = edge[0];
    let firstItemAmount = values[index];
    let secondItem = edge[1];
    let secondItemAmount = 1 / values[index];

    if (!map[firstItem]) {
      map[firstItem] = {
        relationships: [],
        relationshipsValues: [],
        visited: false
      };
    }
    if (!map[secondItem]) {
      map[secondItem] = {
        relationships: [],
        relationshipsValues: [],
        visited: false
      };
    }
    map[firstItem].relationships.push(secondItem);
    map[firstItem].relationshipsValues.push(firstItemAmount);
    map[secondItem].relationships.push(firstItem);
    map[secondItem].relationshipsValues.push(secondItemAmount);
    return map;
  }, {});

  return queries.map((query) => {
    let start = query[0];
    let end = query[1];
    const cleanHashMap = Object.assign({}, hashMap);
    if (start !== end) {
      if (hashMap[start] && hashMap[end]) {
        let result = [];
        dfs(start, end, cleanHashMap, 1, result);
        return result.length ? result[0] : -1;
      }
      return -1;
    }
    return hashMap[start] ? 1 : -1;
  });

  // this graph structure helps with dfs
};

// console.log(calcEquation(
//   [['x1', 'x2'], ['x2', 'x3'], ['x3', 'x4'], ['x4', 'x5']],
//   [3.0, 4.0, 5.0, 6.0],
//   [['x1', 'x5'], ['x5', 'x2'], ['x2', 'x4'], ['x2', 'x2'], ['x2', 'x9'], ['x9', 'x9']]
// ));

// console.log(calcEquation(
//   [
//     ['a', 'b'],
//     ['a', 'c'],
//     ['a', 'd'],
//     ['a', 'e'],
//     ['a', 'f'],
//     ['a', 'g'],
//     ['a', 'h'],
//     ['a', 'i'],
//     ['a', 'j'],
//     ['a', 'k'],
//     ['a', 'l'],
//     ['a', 'aa'],
//     ['a', 'aaa'],
//     ['a', 'aaaa'],
//     ['a', 'aaaaa'],
//     ['a', 'bb'],
//     ['a', 'bbb'],
//     ['a', 'ff']
//   ],
//   [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 1.0, 1.0, 1.0, 1.0, 1.0, 3.0, 5.0],
//   [
//     ['d', 'f'],
//     ['e', 'g'],
//     ['e', 'k'],
//     ['h', 'a'],
//     ['aaa', 'k'],
//     ['aaa', 'i'],
//     ['aa', 'e'],
//     ['aaa', 'aa'],
//     ['aaa', 'ff'],
//     ['bbb', 'bb'],
//     ['bb', 'h'],
//     ['bb', 'i'],
//     ['bb', 'k'],
//     ['aaa', 'k'],
//     ['k', 'l'],
//     ['x', 'k'],
//     ['l', 'll']
//   ]
// ));

// console.log(calcEquation(
//   [['a', 'b'], ['b', 'c']],
//   [2.0, 3.0],
//   [['a', 'c'], ['b', 'c'], ['a', 'e'], ['a', 'a'], ['x', 'x']]
// ));

console.log(calcEquation(
  [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]],
[3.0,4.0,5.0,6.0],
[["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]
))
