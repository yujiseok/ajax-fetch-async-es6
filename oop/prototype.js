function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("book one", "li", "2013");
const book2 = new Book("book two", "il", "2022");

console.log(book1.getAge());
console.log(book1.getSummary());

book2.revise("2023");
console.log(book2);
