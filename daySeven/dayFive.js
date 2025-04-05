let book = {
  name: "Sapiens",
  author: "Yuval Noah Harari",
  pages: 1000,
  description: "The book is about the history of mankind",
  language: "English",
  year: 2020,
};

for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
