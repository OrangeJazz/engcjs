'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!'
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  console.log(firstName);
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();



//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions

console.log(addDecl(3, 5));
// console.log(addExpr(3, 6)); 
console.log(addArrow);
// console.log(addArrow(4, 6));


function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;


//Exaple

if (!numProducts) deleteShoppingCard();


var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }
}

jonas.calcAge();

const matilda = {
  year:2017,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

// f();



// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    //Solution 1
    // const self = this;

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    //Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
}

// jonas.greet();
// console.log(this.firstName);

jonas.calcAge();

//Arguments keyword


const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);


var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
}

addArrow(2, 5, 8);



//Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend, ' Me: ', me);

*/

//Primitives vs. Objects in Practice
//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
//Ref types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marrieadJessica = jessica;
marrieadJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marrieadJessica);

// marrieadJessica = {};

//Copying obj
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  famaly: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.famaly.push('Mary');
jessicaCopy.famaly.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);




