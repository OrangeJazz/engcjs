'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //set a highscore

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
      
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('😭 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }

  }
});

//Challenge 1;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

});