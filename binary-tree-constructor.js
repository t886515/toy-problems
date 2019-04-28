function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const constructOneNode = (val) => {
  return new TreeNode(val);
};

const constructTreeWithArray = (array) => {
  const head = constructOneNode(array[0]);
  const stack = [head];
  let i = 1;
  let y = 0;
  while (i < array.length) {
    let currentParent = stack[y];
    y++;
    if (!currentParent.left) currentParent.left = new TreeNode(array[i]);
    stack.push(currentParent.left);
    i++;
    if (!currentParent.right) currentParent.right = new TreeNode(array[i]);
    stack.push(currentParent.right);
    i++;
  }
  return head;
};

module.exports = {
  constructOneNode,
  constructTreeWithArray
};
