var count = 7;
var score = 0;
var limit = 4;
var timer3 = 0;
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
  document.getElementById("score2").innerHTML="score:" + score;
  if(score < 0){
    alert("Game Over");
  }