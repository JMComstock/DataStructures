// Create a function that reverses a string:
// 'Hi My name is Jason' should be:
// 'nosaJ si eman yM iH'

function reverse(str) {

    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'I did not receive a string';
    }
    
    const reverseString = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        reverseString.push(str[i]);
    }
    // console.log(reverseString);

    return reverseString.join('');
}
console.log(reverse('Hi My name is Jason'));

// using javascript's built in methods to reverse a string
function reverse2(str) {

    return str.split('').reverse().join('');
}
console.log(reverse2('Hi My name is Jason'));

// es6 method to reverse a string
const reverse3 = str => [...str].reverse().join('');


console.log(reverse3('Hi My name is Jason'));