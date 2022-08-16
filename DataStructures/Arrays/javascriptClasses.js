// reference types

var object1 = {value: 10};
var object2 = object1;
var object3 = {value:10};

let answer1 = object1 === object2;
let answer2 = object1 === object3;
let answer3 = object1.value = 15
let answer4 = object2.value = 15;
let answer5 = object3.value

console.log(answer1); // true
console.log(answer2); // false
console.log(answer3); // 15
console.log(answer4); // 15
console.log(answer5); // 10

// context vs scope
function a() {
    let a = 4; // a is within scope and can not be accessed outside the function a()
}

const object4 = {
    a: function () {
        console.log(this);
    }
}
console.log(object4.a());

// instantiation - making a copy of an object and reuse the code
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}.`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`WEE-EEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Gandalf', 'Healer');
const wizard2 = new Wizard('Shamus', 'Spell Caster');

console.log(wizard1.play());
console.log(wizard1.introduce());
console.log(wizard2.introduce());

// Classical Inheritance this code is the same as the code above it....

// var Player = function(name, type) {
//     this.name = name;
//     this.type = type;
// }
//
// Player.prototype.introduce = function() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// }
//
// let wizard1 = new Player('Gandalf', 'Healer');
// let wizard2 = new Player('Shamus', 'Spell Caster');
//
// wizard1.play = function() {
//     console.log(`WEE-EEE I'm a ${this.type}`);
// }
//
// wizard2.play = function() {
//     console.log(`WEE-EEE I'm a ${this.type}`);
// }
