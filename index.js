//Player1
var player1 = Math.random();
player1 = Math.floor((player1*6))+1;
dice1 = "images/dice" + player1 + ".png";

//Player2
var player2 = Math.random();
player2 = Math.floor((player2*6))+1;
dice2 = "images/dice" + player2 + ".png";

if (player1 === player2) {
    document.querySelector("h1").textContent = "Draw!";
    document.querySelectorAll("img").setAttribute("src", dice1);
}
else if (player1 > player2) {
    document.querySelector("h1").textContent = "🚩Player1 Wins!"
    document.querySelectorAll("img")[0].setAttribute("src", dice1);
    document.querySelectorAll("img")[1].setAttribute("src", dice2);
}
else {
    document.querySelector("h1").textContent = "Player2 Wins!🚩"
    document.querySelectorAll("img")[0].setAttribute("src", dice1);
    document.querySelectorAll("img")[1].setAttribute("src", dice2);
}