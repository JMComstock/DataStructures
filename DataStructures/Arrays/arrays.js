"use strict";

// Arrays are just objects ...

const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage on a 32-bit system

// push --- time complexity O(1) operation
strings.push('e');  // <-- adds e to the end of the array

// pop --- time complexity O(1) operation
strings.pop(); // <-- removes last item in the array

// unshift --- time complexity O(n) operation because there is a loop involved
strings.unshift('x'); // <-- adds x at the beginning of the array

// splice --- time complexity O(n) for a looping operation
strings.splice(2,0,'alien'); // <-- adds the string 'alien' at index of 2

console.log(strings);