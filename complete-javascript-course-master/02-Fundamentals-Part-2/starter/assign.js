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