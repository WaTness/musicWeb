
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
    //我們總共有6個元素，因此 index 為0~1
    let index = Math.floor(Math.random() * 9);
    //取的隨機一個 <div class="hole"> 元素
    let currentHole = holes[index];
    //與上次相同就再執行一次隨機選元素的函式
    if (currentHole === lastHole) {
        return randomHoles();
    //不同的話就把這次的結果指派給變數，並回傳這次選到的元素
    } else {
    lastHole = currentHole;
    return currentHole;
    };
};
function popUp() {
  //取得地鼠在頁面上的時間，單位為毫秒
  let time = randomTime(500, 900);
  //取得地鼠要出現的地洞元素
  let hole = randomHoles();
  //將該地洞加上 up 這個 class 讓地鼠出現
  hole.classList.add('up');
  //顯示在頁面上的時間到之後執行以下程式碼
  setTimeout(function () {
      //將取得的元素移除 up 這個 class 讓地鼠下降
      hole.classList.remove('up');
      if (turnOff === false) {
        popUp();
      } else {
        turnOff = false;
      }
  }, time);
  
};


let currentScore = 0;

function score(event) {
  if(!event.isTrusted) return;
  currentScore++;
  scoreBoard.innerHTML = currentScore;
  this.parentNode.classList.remove('up'); 
};
let turnOff = false;

function startWhack() {
  scoreBoard = document.querySelector('.score2');
  currentScore = 0;
  scoreBoard.innerHTML = currentScore;
  popUp();
  setTimeout(function () {
    turnOff = true;
  }, 10000);
};
const WhackArray = [
    {
      name: "Mozart",
      img: "./Images/Mozart.jpg"
    },
      {
      name: "Beethoven",
      img: "./Images/Beethoven.jpg"
    },
      {
      name: "Bach",
      img: "./Images/Johann_Sebastian_Bach.jpg"
    },
      {
      name: "Haydn",
      img: "./Images/800px-Joseph_Haydn.jpg"
    },
    {
      name:"MozartYoung",
      img:"./Images/Wolfgang-amadeus-mozart_2.jpg"
    },
  ]
  

