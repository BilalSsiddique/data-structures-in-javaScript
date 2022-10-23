"use strict";
class Queue {
    constructor() {
        this.container = [];
    }
    enqueue(num) {
        return this.container.unshift(num);
    }
    dequeue() {
        return this.isEmpty() ? null : this.container.pop();
    }
    sizeOfQueue() {
        return this.container.length;
    }
    isEmpty() {
        return this.container.length === 0;
    }
}
let qu = new Queue();
console.log('Removed:', qu.dequeue());
console.log('Size Of Queue:', qu.sizeOfQueue());
for (let item = 1; item <= 5; item++) {
    console.log('Added: ', qu.enqueue(item));
}
console.log('Queue:', qu.container);
console.log('Size Of Queue:', qu.sizeOfQueue());
console.log('Removed:', qu.dequeue());
console.log('Size Of Queue:', qu.sizeOfQueue());
console.log('Removed:', qu.dequeue());
console.log('Queue:', qu.container);
console.log('Size Of Queue:', qu.sizeOfQueue());
