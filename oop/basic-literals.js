// const s1 = "hello";

// console.log(typeof s1);

// const s2 = new String("hello");

// console.log(typeof s2);

// console.log(window);
// console.log(navigator.appVersion);

const book1 = {
  title: "Book One",
  author: "lilil",
  year: "2022",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
const book2 = {
  title: "Book Two",
  author: "lilil",
  year: "2022",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// console.log(book2.getSummary());

console.log(Object.values(book2));
console.log(Object.keys(book2));
