// 最小栈问题

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.a = [];
    this.b = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.a.push(x);
    if(this.b.length === 0) {
        this.b.push(x);
    } else if(this.b[this.b.length-1] >= x) {
        this.b.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const item = this.a.pop();
    if(item === this.b[this.b.length-1]) {
        this.b.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.a[this.a.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.b[this.b.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */