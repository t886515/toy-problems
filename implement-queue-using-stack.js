/**
 * Initialize your data structure here.
 */
// simple dumb way
var MyQueue = function() {
  this.stack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.length === 0;
};

// COOL FASTER WAY w/ 2 stacks
/**
 * Initialize your data structure here.
 */
// simple dumb way
var MyQueue = function() {
  this.stack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.length === 0;
};

// COOL FASTER WAY w/ 2 stacks
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

 /**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.oldStack = [];
  this.newStack = [];
    
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.newStack.push(x);
    
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.oldStack.length > 0) {
    return this.oldStack.pop();
  } else if (this.newStack.length > 0) {
    // migrating from newStack to old stack to flip the order from stack to queue
    this.migrateFromNewToOld();
    return this.oldStack.pop();
  } else {
    return null;
  }
};

MyQueue.prototype.migrateFromNewToOld = function() {
  while (this.newStack.length > 0) {
    this.oldStack.push(this.newStack.pop());
  }
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.oldStack.length > 0) {
      console.log(this.oldStack)
      return this.oldStack[this.oldStack.length - 1];
    } else if (this.newStack.length > 0) {
      // migrating from newStack to old stack to flip the order from stack to queue
      this.migrateFromNewToOld();
      return this.oldStack[this.oldStack.length - 1];
    } else {
      return null;
    }
    
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.oldStack.length === 0 && this.newStack.length === 0;
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */