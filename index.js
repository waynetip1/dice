// create random die rolls
var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomNumber2 = Math.floor((Math.random()*6))+1;

// select the die image based on the roll
var diceImg1 = "images/dice" + randomNumber1 + ".png";
var diceImg2 = "images/dice" + randomNumber2 + ".png";

// change the html img
document.querySelector(".img1").setAttribute("src", diceImg1);
document.querySelector(".img2").setAttribute("src", diceImg2);

// determine the winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else
document.querySelector("h1").innerHTML = "Draw";
