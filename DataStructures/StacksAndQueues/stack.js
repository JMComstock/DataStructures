class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// linked list stack
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this;
    }
    push(value) {
        const newNode= new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }

}

const myLinkedStack = new Stack();
myLinkedStack.push('google');
myLinkedStack.push('hackerrank');
myLinkedStack.push('leetcode');
myLinkedStack.peek();
myLinkedStack.pop();
myLinkedStack.pop();
console.log(myLinkedStack);


// array stack
class StackArray {
    constructor() {
        this.array = [];
    }
    peek() {
        //viewing the first item in the array
        return this.array[this.array.length-1];
    }
    push(value) {
        // prebuilt with javascript arrays, adds another index to the end of an array
        this.array.push(value);
        return this;
    }
    pop() {
        // prebuilt in javascript, removes last index value in the array
        this.array.pop();
        return this;
    }
}

const myArrayStack = new StackArray();
myArrayStack.push('google');
myArrayStack.push('leetcode');
myArrayStack.pop();
myArrayStack.peek();
console.log(myArrayStack);