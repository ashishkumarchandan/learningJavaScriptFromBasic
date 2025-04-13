class Game {
  constructor(name, genre, year) {
    this.name = name;
    this.genre = genre;
    this.year = year;
  }
  play() {
    console.log(`game name: ${this.name} of genre ${this.genre} released in ${this.year}`);
  }

  getYear() {
    let date = new Date();
    let gameYear = date.getFullYear() - this.year;
    return gameYear;
  }
}

module.exports = { Game };
