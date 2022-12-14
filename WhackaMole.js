
let holes = document.querySelectorAll('.hole');
let scoreBoard = document.querySelector('.score2');
let moles = document.querySelectorAll('.mole');




function randomTime(min, max) {
  let time = Math.floor(Math.random() * (max - min) + min);
  return time
};
let lastHole;
function randomHoles() {
  let holes = document.querySelectorAll('.hole');
    let index = Math.floor(Math.random() * 9);
    let currentHole = holes[index];
    if (currentHole === lastHole) {
        return randomHoles();
    } else {
    lastHole = currentHole;
    return currentHole;
    };
};
function popUp() {
  let time = randomTime(500, 900);
  let hole = randomHoles();
  hole.classList.add('up');
  setTimeout(function () {
      hole.classList.remove('up');
      if (turnOff === false) {
        popUp();
      } else {
        turnOff = false;
      }
  }, time);
  
};


let currentScore = 0;


let turnOff = false;

function startWhack() {
  console.log("Start");
  scoreBoard = document.querySelector('.score2');
  currentScore = 0;
  scoreBoard.innerHTML = "score:" + currentScore;
  popUp();
  setTimeout(function () {
    turnOff = true;
  }, 10000);
};


