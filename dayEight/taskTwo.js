// destructuring of array and object

let array = [1, 2, 3, 4, 5];

let [first, second] = array;

console.log(first);
console.log(second);

const book = {
  name: "Sapiens",
  author: "Yuval Noah Harari",
  pages: 1000,
  description: "The book is about the history of mankind",
  language: "English",
  year: 2020,
};

let { name, author } = book;
console.log(name);
console.log(author);
