'use strict';
/*
//Challenge 1
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

let avgScoreDolphins = calcAverage(44, 23, 71);
let avgScoreKoalas = calcAverage(65, 54, 49);
console.log(avgScoreDolphins, avgScoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgKoalas/avgDolphins >= 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins/avgKoalas >= 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log('No team wins!');
  }
}

checkWinner(avgScoreDolphins, avgScoreKoalas);

//2
avgScoreDolphins = calcAverage(85, 54, 41);
avgScoreKoalas = calcAverage(23, 34, 27);
console.log(avgScoreDolphins, avgScoreKoalas);
checkWinner(avgScoreDolphins, avgScoreKoalas);

//Challenge 2

const calcTip = function(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[1] + tips[1]];
console.log(total);
*/

//Challenge 3

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

console.log(mark.calcBMI(), john.calcBMI());
if (mark.bmi > john.bmi) {
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.bmi}))`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}))`);
} else {
  console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) and ${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) are equal`);
}


