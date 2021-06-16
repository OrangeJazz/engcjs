/* 
//Challange 1
//Test data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

//Test data 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;
const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(bmiMark2, bmiJohn2, markHigherBMI2);


//Challange 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);

if(bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// challange 3
const dolphinsFirstResult = 97;
const dolphinsSecondResult = 112;
const dolphinsThirdResult = 80;

const koalasFirstResult = 109;
const koalasSecondResult = 95;
const koalasThirdResult = 50;

const dolphinsAverageScore = (dolphinsFirstResult + dolphinsSecondResult + dolphinsThirdResult) / 3;

const koalasAverageScore = (koalasFirstResult + koalasSecondResult + koalasThirdResult) / 3;

if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log('Dolphins is the winners!');
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
  console.log('Koalas is the winners!');
} else if (koalasAverageScore === dolphinsAverageScore &&koalasAverageScore >= 100) {
  console.log('It is a draw!');
} else {
  console.log('No team wins the trophy!');
}
*/

//Challange 4
const bill = 430;
const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

