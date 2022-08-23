// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,5,5,2,3,5,1,1,4]
// It should return 5

// Given an array = [2,3,4,5]
// It should return undefined


// double for loops are very bad for time complexity, easiest way to solve the algorithm
// this also gives the wrong result because of the way the for loops are set up.
function firstRecurringChar(arr) {

    // check to make sure you have an array
    if (arr == undefined || !arr.length > 2) {
        return undefined;
    }

    // loop through the array 
    for (let i = 0; i < arr.length; i++) {
        // loop through the array at the index next to the first loop
        for (let j = i + 1; j < arr.length; j++) {

            // if the number at the index of the first loop is the same as the number at the 2nd loop
            if (arr[i] === arr[j]) {
                return arr[i];
            } 
        }
    }
    return undefined;
} // time complexity  --> O(n^2) 
  // space complexity --> O(1)
console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringChar([2,5,5,2,3,5,1,1,4]));
console.log(firstRecurringChar([2,3,4,5]));



// the implementation of 2 for loops to get the right answer
function firstRecurringChar2 (arr) {

    // loop outer array to increment by 1, loop inner array to decrement by 1
    for (let i = 1; i < arr.length; i++) {

        for (let j = i-1; j >= 0; j--) {

            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
} // time complexity -->  O(n^2)
  // space complexity --> O(1)

console.log(firstRecurringChar2([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringChar2([2,5,5,2,3,5,1,1,4]));
console.log(firstRecurringChar2([2,3,4,5]));

// using HashMaps improves time complexity, but also increases space complexity because you create a new object
function firstRecurringChar3 (arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return arr[i];
        } else {
            map[arr[i]] = i;
        }
    }
    return undefined;
} // time complexity -->  O(n)
  // space complexity --> O(n)

console.log(firstRecurringChar3([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringChar3([2,5,5,2,3,5,1,1,4]));
console.log(firstRecurringChar3([2,3,4,5]));
