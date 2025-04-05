const game = document.querySelector(".game");

game.style.backgroundColor = "lightblue";

const yearReleased = game.querySelector(".year");

game.removeChild(yearReleased);

const anotherGame = document.querySelector(".anotherGame");
anotherGame.style.backgroundColor = "lightgreen";


document.body.removeChild(anotherGame); 
