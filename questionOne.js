/**
 * Design a stack class that supports push, pop, top, and retrieving the maximum element.

The stack stores integers only.

push(int x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMax() -- Retrieve the maximum element in the stack.
 */

class IntStack {
  constructor() {
    this.stack = [];
  }

  push(int) {
    if (!Number.isInteger(int)) {
      return console.error(`${int} is not integer`);
    }
    this.stack.push(int);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack.slice(-1)[0];
  }

  getMax() {
    return Math.max(...this.stack);
  }
}

const myStack = new IntStack();
myStack.push("w");
myStack.push(0.8);
myStack.push(8);
myStack.push(1);
myStack.push(999);
myStack.push(5);
myStack.pop();
console.log(myStack.top());
console.log(myStack.getMax());
