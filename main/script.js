'use strict';
/*
// 1
function firstFunc(arr, fn) {
    const res = fn(arr);
    return `New value: ${res}`;
}

function handler1(el) {
  let str = '';
  for (let i of el) {
    i = i[0].toUpperCase()+i.slice(1);
    str += i;
  }
  return str;
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  let str = '';
  for (let i = 0; i < el.length; i++) {
    el[i] = el[i] * 10;
    str += `${el[i]}, `;
  }
  str = str.slice(0, str.length - 1);
  return str;
}

console.log(firstFunc([10, 20, 30], handler2) )

function handler3(el) {
  let str = '';
  for (let i of el) {
    const strpart = `${i.name} is ${i.age}, `;
    str += strpart;
  }
  str = str.slice(0, str.length - 2);
  return str;
}

console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3));

function handler4(el) {
  let str = '';
  for (let i of el) {
    const strpart = i.split('').reverse().join('');
    console.log(strpart);
    str += `${strpart}, `;
  }
  str = str.slice(0, str.length - 1);
  return str;
}

console.log(firstFunc(['abs', '123'], handler4));
*/

/*
const rectangle = {
  width: 50, height: 100, getSquare: function () {
    return this.width * this.height;
  }
}

const price = {
  price: 10,
  discount: '15%',
  getPrice() {
    console.log(this.price);
  },
  getPriceWithDiscount() {
    const disc = parseInt(this.discount);
    console.log(this.price*(100-disc)/100);
  }
};
  
  price.getPrice(); // 10
  
price.getPriceWithDiscount(); // 8.5
  

const object = {
  height: 0,
  increaseHeight() {
    this.height++;
  },
}
object.height = 10;

object.increaseHeight(); // придумать свое название для метода

console.log(object.height); // 11;


const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value++;
    return this;
  },
  minusOne: function () {
    this.value--;
    return this;
  },
}
  
  numerator.double().plusOne().plusOne().minusOne();
  
console.log(numerator.value);

const object2 = {
  cost: 100,
  number: 5,
  price() {
    console.log(this.cost*this.number);
  },
}

object2.price();

const object3 = {
  cost: 500,
  number: 50,
}
object2.price.call(object3);

  

let sizes = {width: 5, height: 10},

  getSquare = function () { return this.width * this.height };

console.log(getSquare.call(sizes));

let element = {
  height: 25,
  getHeight: function () {return this.height;}
};
  
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); 
*/