/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inArr = [];
    this.outArr = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inArr.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.outArr.length) {
        while(this.inArr.length) {
            this.outArr.push(this.inArr.pop())
        }
    }
    return this.outArr.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.outArr.length) {
        while(this.inArr.length) {
            this.outArr.push(this.inArr.pop())
        }
    }
    return this.outArr[this.outArr.length-1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.inArr.length || this.outArr.length)
        return false;
    else 
        return true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */