'use strict';

/*
let hasDriversLicense = false;
const passTest = true;  

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log ('I can drive :D');

// const interface = 'Audio';
// const private = 543;
// const if = 23;


//Functions
function logger() {
  console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//console.log(fruitProcessor(3, 4));


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function Declarations vs. Expressions
//Declarations
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


//Arrow Functions

//Arraw
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


//Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2,3));


//Reviewing Functions

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName)  {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎈`);
    return -1;
  }
  //return 
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

//Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Execrcise 
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay'); //at end
console.log(friends);
console.log(newLength);

friends.unshift('John'); //at start
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(friends);
console.log(popped);


friends.shift(); //First
console.log(friends);


//Position of the element
console.log(friends.indexOf('Steven')); //number
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven')); //boolean '==='
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')){
  console.log('You have a friend called Steven');
}