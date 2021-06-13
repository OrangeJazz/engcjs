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

//
avgScoreDolphins = calcAverage(85, 54, 41);
avgScoreKoalas = calcAverage(23, 34, 27);
console.log(avgScoreDolphins, avgScoreKoalas);
checkWinner(avgScoreDolphins, avgScoreKoalas);
