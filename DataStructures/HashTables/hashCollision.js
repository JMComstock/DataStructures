let user = {
    age: 54,
    name: 'Robert',
    magic: true,
    scream: function() {
        console.log('AHHHHHHH!');
    }
}

// The more key:value pairs that get added into the object of user,
// the better the chance of a collision, where as key:value pairs will
// share the same space in memory, 
// there 2 methods to deal with this problem,
// 1. linked list...

// O(n/k) k is the size of the hash table with linked lists
// for O(n/k), the rule for BigO states you remove constants, so O(n/k) becomes O(n)
user.age  // O(1) <-- this is a lookup, it is O(1) but it could be O(n) if there is multiple key value pairs in the memory space
user.spell = 'abra cadabra'; // O(1)
console.log(user);
user.scream(); // O(1)

// O(n/k)


// in JavaScript ...
const a = new Map() // stores data in a particular order that can be called upon and will keep that order
const b = new Set() // stores only the key, not the value

