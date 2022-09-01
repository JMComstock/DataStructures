class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // Create an append method 
    append(value) {
        // instantiate the Node class
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    // Create an append method
    prepend(value) {
        // instantiate the Node class
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }
        if(index === 0) {
            this.prepend(value);
            return this.printList();
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        // check for params
        if (index >= this.length) {
            return "Index out of bounds";
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        const follower = unwantedNode.next;

        leader.next = follower;
        follower.prev = leader;

        this.length--;
        return this;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(32);
myDoublyLinkedList.append(6); // [ 32, 6 ]
myDoublyLinkedList.append(8); // [ 32, 6, 8 ]
myDoublyLinkedList.prepend(1); // [ 1, 32, 6, 8 ]
myDoublyLinkedList.insert(2, 99); // [ 1, 32, 99, 6, 8 ]
myDoublyLinkedList.remove(2); // [ 1, 32, 6, 8 ]
console.log(myDoublyLinkedList.printList());