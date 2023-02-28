'use strict';

/*document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highSore = 0;
//function for display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//function for display number
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
//access check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when guess is not number
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
    //when guess and secretnumber is same
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highSore) {
      highSore = score;
      document.querySelector('.highscore').textContent = highSore;
    }
    //when guess is not same with secretnumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /*document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;*/
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//working with again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
