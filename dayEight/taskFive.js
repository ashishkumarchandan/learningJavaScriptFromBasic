// enhanced object literal
const name = "CyberPunk";
const genre = "sci-fi, open world";

const game = {
  name,
  genre,
  year: 2021,
  publisher: "CD Project",
  yearSinceReleased: function () {
    let date = new Date();
    return date.getFullYear() - this.year;
  },
};


// compuetd property name

const platformProperty = "platform";
const ratingProperty = "rating";

game[platformProperty] = "Playstation, PC, XBOX, steamDeck";
game[ratingProperty] = "9.5";
console.log(game);

const keys = Object.keys(game);

for (const key in game) {
  if (typeof game[key] !== "function") {
    console.log(` ${key}: ${game[key]}`);
  }
}

console.log("\n");
for (const key of keys) {
  if (typeof game[key] !== "function") {
    console.log(` ${key}: ${game[key]}`);
  }
}
console.log(game.yearSinceReleased());
