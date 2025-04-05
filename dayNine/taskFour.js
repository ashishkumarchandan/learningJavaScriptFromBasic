const game = document.querySelector(".game");
game.style.backgroundColor = "lightblue";

const img = document.querySelector("#CyberPunkImage");

let backGroundImage = false;
img.addEventListener("click", function () {
    if(!backGroundImage){
    img.src = "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
    backGroundImage = true;
  }else{
    img.src = "https://upload.wikimedia.org/wikipedia/en/a/a1/Cyberpunk_Edgerunners_poster.jpg"
    backGroundImage = false;
  }
  
});

game.appendChild(img);

const anotherGame = document.querySelector(".anotherGame");

let backgroundColorAdded = false;
anotherGame.addEventListener("click", function () {
  if (!backgroundColorAdded) {
    anotherGame.style.backgroundColor = "lightgreen";
    backgroundColorAdded = true;
  } else {
    anotherGame.style.backgroundColor = "";
    backgroundColorAdded = false;
  }
});

