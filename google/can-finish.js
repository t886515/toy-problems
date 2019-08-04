/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// const constructHashMap = prerequisites => {
//   return prerequisites.reduce((acc, pre) => {
//     let course = pre[0];
//     let req = pre[1];
//     if (!acc[course]) {
//       acc[course] = {
//         from: [],
//         to: [],
//         visited: false,
//         val: course,
//         original: false
//       };
//     }
//     if (!acc[req]) {
//       acc[req] = {
//         from: [],
//         to: [],
//         visited: false,
//         val: req,
//         original: false
//       };
//     }
//     acc[course].from.push(req);
//     acc[req].to.push(course);
//     return acc;
//   }, {});
// };

// function dfs(node, cleanGraphMap, firstTime) {
//   if (node.original && !firstTime) {
//     // console.log('???????? ever here? please?');
//     node.cantFinish = true;
//     return;
//   }
//   // if marked as newly viisted, target --
//   if (node.from.length) {
//     for (let i = 0; i < node.from.length; i++) {
//       const parentNodeVal = node.from[i];
//       const parentNode = cleanGraphMap[parentNodeVal];
//       if (!parentNode.visited) {
//         parentNode.visited = true;
//         dfs(parentNode, cleanGraphMap);
//       }
//     }
//   }
// }

// var canFinish = function(numCourses, prerequisites) {
//   // if theres no pre, always true
//   if (!prerequisites.length) return true;
//   const graphMap = constructHashMap(prerequisites);
//   // if theres more courses need to be taken than total course, then no..
//   if (Object.keys(graphMap).length > numCourses) return false;
//   // console.log(graphMap);
//   // find out where to start

//   const pointsToStart = [];
//   for (let key in graphMap) {
//     let node = graphMap[key];
//     if (node.from.length) {
//       pointsToStart.push(node.val);
//     }
//   }

//   // start dfs to find out about result;
//   let result = true;
//   if (pointsToStart.length) {
//     // for each start, go through dfs. share 1 hashMap value to flip on and off viisted
//     for (let i = 0; i < pointsToStart.length; i++) {
//       const nodeVal = pointsToStart[i];
//       // const cleanGraphMap = JSON.parse(JSON.stringify(graphMap));
//       const cleanGraphMap = graphMap;
//       console.log('======================imp===========');
//       console.log('im at', nodeVal, 'heres the object', cleanGraphMap);
//       const node = cleanGraphMap[nodeVal];
//       node.original = true;
//       node.cantFinish = false;
//       node.visited = true;
//       dfs(node, cleanGraphMap, true);
//       node.original = false;
//       if (node.cantFinish) {
//         result = false;
//         return result;
//       }
//     }
//   }
//   return result;
// };

// improved version
// concept:
/**
 * The point is that, the only reason that a course wont be finished is when there's a loop in pre-req
 * We can safely assume that the number of courses appear in pre-req will alway be smaller
 *
 * So all we need to do, is to make sure when we start examing a course, we search all the way down to see
 * if it loops back to the orginal one. If it does, then you can NOT finish.
 *
 * Side notes: the visiting HAS to be an array because as we going deep into the node of the tree, we could
 * have a node that's diff from original one, but it was looping back to a previous one -> we want to return false
 * at that point as well, just as how we would return false if the node found was looping back
 *
 * In short, this question is basically asking:
 *  DOES THIS GRAPH HAS ANY CIRCULAR LOOP???
 */

const canFinish = (numCourses, prerequisites) => {
  // do a hashMap of all the courses leading to
  const hashMap = prerequisites.reduce((map, pres) => {
    const [c, pre] = pres;
    if (!map[pre]) {
      map[pre] = [];
    }
    map[pre].push(c + '');
    return map;
  }, {});
  console.log(hashMap);

  const visited = new Set();
  const visiting = new Set();

  function dfs(courses, hashMap) {
    // console.log(courses, original);
    for (let course of courses) {
      if (visited.has(course)) {
        return true;
      }
      if (visiting.has(course)) {
        return false;
      }
      visiting.add(course);
      let newCourses = hashMap[course];
      if (newCourses) {
        if (!dfs(newCourses, hashMap)) {
          return false;
        }
      }
      visiting.delete(course);
    }
    return true;
  }

  for (let pre in hashMap) {
    original = pre;
    let courses = hashMap[pre];
    // console.log('==============');
    // console.log(original);
    // console.log(courses);
    // console.log(visited);
    // console.log('====');
    if (!dfs(courses, hashMap)) {
      return false;
    }
    visited.add(pre + '');
  }
  return true;
};

console.log(canFinish(2, [[1, 0]])); // => true
console.log(canFinish(2, [[1, 0], [0, 1]])); // => false
console.log(canFinish(3, [[1, 0]])); // => true
console.log(canFinish(3, [[1, 0], [1, 2], [0, 1]])); // => false
console.log(canFinish(3, [[1, 0], [2, 1]])); // => true
console.log(canFinish(3, [[1, 0], [0, 2], [2, 1]])); // => false
console.log(canFinish(4, [[0, 1], [3, 1], [1, 3], [3, 2]])); // => false
console.log(canFinish(4, [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]])); // => false
