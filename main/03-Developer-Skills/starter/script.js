// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [5, -7, -2, -10, 9, 12, 27, -15];

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max,min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures1);
console.log(amplitude);


const calcTempAmplitudeNew = function (temp1, temp2) {
  const temp = temp1.concat(temp2);
  //console.log(temp);
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
 // console.log(max,min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures1, temperatures2);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius')),
  }

  //console.log(measurment);
  console.table(measurment);
  //console.log(measurment.value);
  //console.warn(measurment.value);
  //console.error(measurment.value);
  const kelvin = measurment.value + 273;
  return kelvin;

}

console.log(measureKelvin());
*/
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i+1} days ...`;
  }
  console.log(str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
