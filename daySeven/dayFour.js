let book = {
  name: "Sapiens",
  author: "Yuval Noah Harari",
  pages: 1000,
  description: "The book is about the history of mankind",
  language: "English",
  year: 2020,
};

book.getTitleAndYear = function () {
  return `${this.name} (${this.year})`;
};
console.log(book.getTitleAndYear());


