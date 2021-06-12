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
