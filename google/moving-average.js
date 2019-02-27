/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  // inputQueue's size can't go over size
  this.inputQueue = [];
  this.size = size;
  this.inputSum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.inputQueue.length >= this.size) {
    this.inputSum -= this.inputQueue[0];
    this.inputQueue = this.inputQueue.slice(1).push(val);
    this.inputSum += val;
  } else {
    this.inputQueue.push(val);
    this.inputSum += val;
  }
  return this.inputSum / this.inputQueue.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */
