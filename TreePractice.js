const { constructTreeWithArray } = require('./binary-tree-constructor');

const tree1 = constructTreeWithArray([10, 5, 20, 9, 18, 3, 7, 2, null, null, 21]);

console.log(tree1);

const inOrderTraversal = (t) => {
    if (t !== null) {
        inOrderTraversal(t.left);
        console.log(t.val);
        inOrderTraversal(t.right);
    }
}

console.log("************** In Order Traversal ************** ");
inOrderTraversal(tree1);

const preOrderTraversal = (t) => {
    if (t !== null) {
        console.log(t.val);
        preOrderTraversal(t.left);
        preOrderTraversal(t.right);
    }
}

console.log("************** Pre Order Traversal ************** ");
preOrderTraversal(tree1);

const postOrderTraversal = (t) => {
    if (t !== null) {
        postOrderTraversal(t.left);
        postOrderTraversal(t.right);
        console.log(t.val);
    }
}

console.log("************** Post Order Traversal ************** ");
postOrderTraversal(tree1);
