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

  // Instanse methods
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

/////////////////////////////////////
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

///////////////////////////////////
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
/*
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
*/

/////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`New accelerated speed of ${this.maker} is ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`New braked speed of ${this.maker} is ${this.speed} km/h`);
};


const EV = function (maker, speed, charge) {
  Car.call(this, maker, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Battery charge of ${this.maker} is ${this.charge}% now`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.maker} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};
EV.prototype.constructor = EV;

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.brake();

console.log(tesla.__proto__);
console.log(tesla.__proto__.__proto__);

console.log(tesla instanceof EV);
console.log(tesla instanceof Car);
console.log(tesla instanceof Object);

console.dir(EV.prototype.constructor);
*/

/////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 😁😀');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs  to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}, I study ${this.course}`);
  };

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// const martha = new StudentCl('Martha Jones', 2012);

console.log(martha);
martha.introduce();
martha.calcAge();
*/

/////////////////////////////////
// Inheritance Between "Classes": Object.create
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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName}, I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');

console.log(jay);
jay.introduce();
jay.calcAge();
*/


/////////////////////////////////////////////////
// Another Class Example
/*
class Account {
  // 1. Public fields (instances)
  locale = navigator.language;
  
  // 2. Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3. Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // for work with chaining methods
  }

  withdraw(val) {
    this.deposit(-val);
    return this; // for work with chaining methods
  }

  
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; // for work with chaining methods
    }
  }

  static helper() {
    console.log('Helper');
  }
  
  // 4. Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.#movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);

console.log(acc1);
// console.log(acc1.#pin);
console.log(acc1.getMovements());


// console.log(acc1.#movements);


/////////////////////////////////////////
// Encapsulation: Protected Properties and Methods

///////////////////
// Encapsulation: Private Class Fields and Methods

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version - avalible only in the class itself, not in the instances)

Account.helper();

///////////////////////////////////
// Chaining Methods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());



////////////////////////////
// ES6 Classes Summary
*/

/////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }
  accelerate () {
    this.speed += 10;
    console.log(`New accelerated speed of ${this.maker} is ${this.speed} km/h`);
    return this;
  }
  brake () {
    this.speed -= 5;
    console.log(`New braked speed of ${this.maker} is ${this.speed} km/h`);
    return this;
  }
  
  get speedUS() {
    return `The speed of ${this.maker} is ${this.speed} km/h or ${this.speed / 1.6} mi/h`;
  }
  
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(maker, speed, charge) {
    super(maker, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery charge of ${this.maker} is ${this.#charge}% now`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.maker} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }

}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);

rivian.accelerate().accelerate().brake().chargeBattery(90).brake().accelerate();

console.log(rivian.speedUS);
