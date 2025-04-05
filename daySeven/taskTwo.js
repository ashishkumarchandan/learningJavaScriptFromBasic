// adding method in the fucntion

let book = {
  name: "Sapiens",
  author: "Yuval Noah Harari",
  pages: 1000,
  description: "The book is about the history of mankind",
  language: "English",
  year: 2020,
};

// gives detail about name of book and author
book.getDetail = function () {
  let detail = `${this.name} is wirtten by ${this.author}`;
  return detail;
};

console.log(book.getDetail());

book.updateYear = function (newYear) {
  this.year = newYear;
};

console.log(book.year);
const date = new Date();
book.updateYear(date.getFullYear());
console.log(book.year);
