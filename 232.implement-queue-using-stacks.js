/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

/**
 * Create my own stack data structure here.
 */

var Stack = function () { 
    this.list = new Array();
}    
Stack.prototype.push = function(x) { 
    this.list.push(x);
}
Stack.prototype.pop = function() { 
    return this.list.pop(); 
}
Stack.prototype.peek = function() { 
    return this.list[this.list.length - 1];
}
Stack.prototype.empty = function() { 
    return this.list.length === 0; 
}
Stack.prototype.size = function () { 
    return this.list.length;
}

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inStack = new Stack();
    this.outStack = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * Removes the elements from inStack to outStack
 * @return {void}
 */
MyQueue.prototype.move = function() {
    if(this.outStack.empty()) {
        while(!this.inStack.empty()) {
            this.outStack.push(this.inStack.pop());
        }
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.move();
    return this.outStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.move();
    return this.outStack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.outStack.empty() && this.inStack.empty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

