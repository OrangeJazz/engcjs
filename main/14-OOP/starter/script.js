'use strict';


// Constructor Functions and the new Operator
/*
const Person = function (firstName, birthYear) {
  // console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);  
  // };
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Behind the sciene
//1. New empty {} object is created
// 2. Function is called this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);


Person.hey = function () {
  console.log('Hey there 😀');
}
Person.hey();

//////////////////////
// Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


//////////////////////////
// Prototypal Inheritance and The Prototype Chain

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);

*/
///////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = `${parseInt(this.speed) + 10} km/h`;
  console.log(`New accelerated speed of ${this.maker} is ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed = `${parseInt(this.speed) - 5} km/h`;
  console.log(`New braked speed of ${this.maker} is ${this.speed}`);
};

const car1 = new Car('BMW', '120 km/h');
const car2 = new Car('Mercedes', '95 km/h');

car1.accelerate();
car2.brake();
*/


// ES6 Classes

// class Expression
// const PersonCl = class {}

// class Declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instanse methds
  // Methods in class but outside the constructor function will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 😁😀');
    console.log(this);
  }
}


const jessica = new PersonCl('Jessica Davis', 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter', 1965);


// Setters and Getters

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


// Static Methods

PersonCl.hey();
*/
// Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/


///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }
  accelerate () {
    this.speed += 10;
    console.log(`New accelerated speed of ${this.maker} is ${this.speed}`);
  }
  brake () {
    this.speed -= 5;
    console.log(`New braked speed of ${this.maker} is ${this.speed}`);
  }
  
  get speedUS() {
    return this.speed / 1.6;
  }
  
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);