const game = document.querySelector(".game");
const para = game.querySelector(".genre");

para.addEventListener("click", function () {
  para.textContent = "Sci-fi, open world, action, adventure";
});

const anotherGame = document.querySelector(".anotherGame");
anotherGame.addEventListener("mouseover", function () {
    anotherGame.style.border = "5px solid lightgreen";
});

