function CardGame(){


const cardsArray = [
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
var score = 0;
document.getElementById("score1").innerHTML="score:" + score;
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
});

var firstGuess = "";
var secondGuess = "";
var count = 0;
var previousTarget = null;
var delay = 1100;

var game = document.getElementById("game1_play");
var grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach(function (item) {
    var name = item.name
    var img = item.img;

    var card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = name;

    var front = document.createElement("div");
    front.classList.add("front");

    var back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = "url(" + img + ")";

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

var match = function match() {
    var selected = document.querySelectorAll(".selected");
    selected.forEach(function (card) {
        card.classList.add("match");
    });
};

var resetGuesses = function resetGuesses() {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(function (card) {
        card.classList.remove("selected");
    });
};

grid.addEventListener("click", function (event) {
    var clicked = event.target;

    if (
        clicked.nodeName === "SECTION" ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains("selected") ||
        clicked.parentNode.classList.contains("match")
    ) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add("selected");
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add("selected");
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                score++;
                document.getElementById("score1").innerHTML="score:" + score;
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }
    if(score === cardsArray.length){
        alert("You win");
        document.getElementById("game1_play").style="display:none";
        document.getElementById("BTNgame1").style="display:inline";
        var sec = document.querySelector("section");
        sec.remove("gird");
    }
});
}
function CardRestart(){
    var sec = document.querySelector("section");
     sec.remove("gird");
}
