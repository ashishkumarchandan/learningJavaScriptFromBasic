// a nested object of library

let library = {
  name: "NightCity library",
  books: [
    {
      name: "Sapiens",
      author: "Yuval Noah Harari",
      pages: 1000,
      description: "The book is about the history of mankind",
      language: "English",
      year: 2020,
    },
    {
      name: "The Martian",
      author: "Andy Weir",
      pages: 1000,
      description: "The book is about the history of mankind",
      language: "English",
      year: 2020,
    },
    {
      name: "Think again",
      author: "Adam Grant",
      pages: 1000,
      description: "The book is about the history of mankind",
      language: "English",
      year: 2020,
    },
  ],
};

console.log(library);

let len = library.books.length;
console.log(len);

for(let i=0;i<len;i++){
    console.log(library.books[i].name);
}