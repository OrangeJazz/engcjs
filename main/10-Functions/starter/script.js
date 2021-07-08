'use strict';
/*
//////////////////////////////
//Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/
///////////////////////////////////////////
//How Passing Arguments Works: Value vs. Reference
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    console.log('Check in');
  } else {
    console.log('Wrong passport');
  }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...

// const flightNum = flight;
// const passenger = jonas;


const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/

////////////////////////////////////
// First-Class and Higher-Order Functions

////////////////////////////////////////
// Functions Accepting Callback Functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);


  console.log(`Transformed by: ${fn.name}`);
  
}

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time!
const high5 = function () {
  console.log('🖐');
};
// document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

*/

////////////////////////////////////////
// Functions Returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//Challenge with arrow functions 

const greet1 = (greeting) => (name) => console.log(`${greeting}, ${name}!`);
greet1('Hello')('Jonas');
*/

/////////////////////////////////
// The call and apply Methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

//Does NOT work
// book(23, 'Sarah Williams');

//Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// The bind Method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

book.bind(swiss)(443, 'Mary Vay');


const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kerry Williams');
bookEW23('Martha Cooper');


// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));


const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
};

console.log(addTaxRate(0.23)(100));
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));

const addTAX1 = (rate) => (value) => value + value * rate;
console.log(addTAX1(0.23)(100));
*/

/////////////////////////////////////
//Challenge 1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
1. Создайте метод с именем 'registerNewAnswer' для объекта 'poll'. Метод делает 2 вещи:
  1.1. Отображение окна подсказки для пользователя, чтобы ввести номер выбранной опции. Приглашение должно выглядеть так:
        Какой твой любимый язык программирования?
        0: JavaScript
        1: Python
        2: Ржавчина
        3: C ++
        (Напишите номер варианта)
  
  1.2. На основе введенного числа обновите массив ответов. Например, если параметр равен 3, увеличьте значение В ПОЛОЖЕНИИ 3 массива на 1. Убедитесь, что введено число, и имеет ли оно смысл (например, ответ 52 не имеет смысла, верно?)
2. Вызывайте этот метод всякий раз, когда пользователь нажимает кнопку «Ответить на опрос».
3. Создайте метод displayResults, который отображает результаты опроса. Метод принимает в качестве входных данных строку (называемую «типом»), которая может быть либо «строкой», либо «массивом». Если типом является «массив», просто отобразите массив результатов как есть, используя console.log (). Это должен быть вариант по умолчанию. Если тип - «строка», отобразите строку типа «Результаты опроса: 13, 2, 4, 1».
4. Запускайте метод displayResults в конце каждого вызова метода registerNewAnswer.

ПОДСКАЗКА: используйте многие инструменты, о которых вы узнали в этом и последнем разделе 😉

БОНУС: используйте метод displayResults для отображения 2 массивов в тестовых данных. Используйте как «массив», так и «строку». НЕ помещайте массивы в объект опроса! Итак, как должно выглядеть ключевое слово this в этой ситуации?

ДАННЫЕ БОНУСНОГО ТЕСТА 1: [5, 2, 3]
ДАННЫЕ БОНУСНОГО ТЕСТА 2: [1, 5, 3, 9, 6, 1]
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};