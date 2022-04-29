const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// const book1 = Object.create(bookProtos);
// book1.title = "book 1";
// book1.author = "aaa";
// book1.year = "1999";

const book1 = Object.create(bookProtos, {
  title: { value: "book 1" },
  author: { value: "hi" },
  year: { value: "1500" },
});

console.log(book1.getAge());
console.log(book1.getSummary());
