function Node(val) {
  this.val = val;
  this.children = [];
  this.parents = [];
}
var findRedundantDirectedConnection = function(edges) {
  //Broken Graphs
  //1. Graph has no loop, a node with 2 parents
  //2. Graph with loop, every node has 1 parent
  //3. Graph with loop, a node with 2 parents
  let root;
  const visited = new Set();
  const hasTwoParents = [];
  const hashMap = edges.reduce((map, edges, i) => {
    const [parent, child] = edges;

    if (visited.has(child)) {
      hasTwoParents.push([parent, child]);
    }
    if (!map[parent]) {
      map[parent] = new Node(parent);
    }
    if (!map[child]) {
      map[child] = new Node(child);
    }

    map[child].parents.push(map[parent]);
    map[parent].children.push(map[child]);
    visited.add(parent);
    visited.add(child);
    return map;
  }, {});

  console.log(hasTwoParents, hashMap, root);
  if (hasTwoParents.length === 1) {
    return hasTwoParents[0];
  } else {
  }

  // const visited
  // let result = [];
  // function dfs(root, child, visiting) {
  //   console.log('=====', visiting, '====');
  //   if (!child) {
  //     return;
  //   }
  //   for (let childNode of child) {
  //     if (visited.has(childNode)) {
  //       result.push([root, childNode]);
  //       return;
  //     }
  //     if (!visiting.has(childNode)) {
  //       visiting.add(childNode);
  //       let newRootChild = hashMap[childNode];
  //       if (newRootChild) {
  //         dfs(childNode, newRootChild, visiting);
  //       }
  //       visiting.delete(childNode);
  //     }
  //   }
  // }

  // for (let root in hashMap) {
  //   const visiting = new Set();
  //   const child = hashMap[root];
  //   visiting.add(root);
  //   dfs(root, child, visiting);
  //   console.log(visiting);
  //   visiting.delete(root);
  // }
  // console.log(result);
};

console.log(findRedundantDirectedConnection([[1, 2], [1, 3], [2, 3]]));
console.log(
  findRedundantDirectedConnection([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]])
);
console.log(findRedundantDirectedConnection([[2, 1], [3, 1], [4, 2], [1, 4]]));
