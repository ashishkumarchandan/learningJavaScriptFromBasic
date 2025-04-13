const { Game } = require("./taskTwoPartOne");

const cyberPunk = new Game("Cyberpunk", "Sci-fi", 2020);

console.log(cyberPunk.getYear());

cyberPunk.play();