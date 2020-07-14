function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const constructOneNode = val => {
  return new TreeNode(val);
};

const constructTreeWithArray = array => {
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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const composedListNodes = (valArray, createCylical) => {
  let list = new ListNode(0);
  let last;
  valArray.reduce((acc, val, index) => {
    acc.next = new ListNode(val);
    if (index === valArray.length - 1) {
      last = acc.next;
    }
    return acc.next;
  }, list);
  if (createCylical) {
    last.next = list.next;
  }
  return list.next;
};

class Graph {
  constructor(value) {
    this.to = [];
    this.from = [];
    this.toAmount = [];
    this.fromAmount = [];
    this.visited = false;
    this.value = value;
  }
  addToTo(node, amount) {
    this.to.push(node);
    this.toAmount.push(amount);
  }
  addToFrom(node, amount) {
    this.from.push(node);
    this.fromAmount.push(amount);
  }
  findNodeInTo(target) {
    for (let i = 0; i < this.to.length; i++) {
      let node = this.to[i];
      if (node.value === target) return i;
    }
    return -1;
  }
  findNodeInFrom(target) {
    for (let i = 0; i < this.from.length; i++) {
      let node = this.from[i];
      if (node.value === target) return i;
    }
    return -1;
  }
  markVisited() {
    this.visited = true;
  }
  unmarkVisited() {
    this.visited = false;
  }
}

module.exports = {
  constructOneNode,
  constructTreeWithArray,
  composedListNodes,
  Graph,
  TreeNode,
  ListNode
};
