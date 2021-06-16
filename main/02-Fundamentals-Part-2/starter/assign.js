'use strict';

// const country = 'Russia';
// const continent = 'Europe';
// let population = 147;
// const isIsland = false;
// let language = 'russian';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const countryOne = describeCountry('Russia', 147, 'Moscow');
const countryTwo = describeCountry('Ukraine', 41.5, 'Kiev');
const countryThree = describeCountry('England', 68.5, 'London');

console.log(countryOne);
console.log(countryTwo);
console.log(countryThree);

function percentageOfWorld1(population) {
  return (population * 100) / 7900;
}

const percentageRussia = percentageOfWorld1(147);
const percentageUkraine = percentageOfWorld1(41.5);
const percentageEngland = percentageOfWorld1(68.5);
console.log(percentageRussia, percentageUkraine, percentageEngland);

const percentageOfWorld2 = function(population) {
  return (population * 100) / 7900;
}

const percentageRussia2 = percentageOfWorld2(147);
const percentageUkraine2 = percentageOfWorld2(41.5);
const percentageEngland2 = percentageOfWorld2(68.5);
console.log(percentageRussia2, percentageUkraine2, percentageEngland2);

const percentageOfWorld3 = population => (population * 100) / 7900;
console.log(percentageOfWorld3(147));

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
}

const describePopulationRussia = describePopulation('Russia', 147);
console.log(describePopulationRussia);
const describePopulationUkraine = describePopulation('Ukraine', 41.5);
console.log(describePopulationUkraine);
const describePopulationEngland = describePopulation('England', 68.5);
console.log(describePopulationEngland);

const populations = [147, 88, 47.5, 69];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]), 
  percentageOfWorld1(populations[1]), 
  percentageOfWorld1(populations[2]), 
  percentageOfWorld1(populations[3])
];
console.log(percentages);

const neighbours = ['Ukraine', 'China', 'Belorus', 'Japane', 'Kazahstan'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if(!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D'); 
}  
neighbours[neighbours.indexOf('China')] = 'Republic of Sweden';
console.log(neighbours);

const myCountry = {
  coutry: 'Russia',
  capital: 'Moscow',
  language: 'russian',
  populations: 147,
  neighbours: ['Ukraine', 'China', 'Belorus', 'Japane', 'Kazahstan'],
  describe: function() {
    return `${this.coutry} has ${this.populations} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  },
  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;

    // this.isIsland = !Boolean(this.neighbours.length);
  }
}

// console.log(`${myCountry.coutry} has ${myCountry.populations} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.populations += 2;
// console.log(myCountry.populations);
// myCountry['populations'] -= 2;
// console.log(myCountry.populations);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);

for(let voterNum = 1; voterNum <=50; voterNum++) {
  console.log(`Voter number ${voterNum} is currently voting`);
}

const populations1 = [147, 88, 47.5, 69];
const percentages2 = [];
for(let i = 0; i < populations1.length; i++) {
  percentages2.push(percentageOfWorld1(populations1[i]));
}
console.log(percentages2);
console.log(percentages);

const listOfNeighbours = [['Canada', 'Mexico'], 
['Spain'], 
['Norway', 'Sweden', 'Russia']];
for(let i = 0; i < listOfNeighbours.length; i++) {
  for(let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

let i = 0;
const percentages3 = [];
while(i < populations1.length) {
  percentages3.push(percentageOfWorld1(populations1[i]));
  i++;
}
console.log(percentages3);