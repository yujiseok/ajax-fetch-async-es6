class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBook() {
    return "rkskr";
  }
}

const book1 = new Book("asdf", "ba", "1234");

// console.log(book1.getSummary());
// book1.revise("2021");
// console.log(book1);
// console.log(book1.getAge());
// console.log(book1.getSummary());

console.log(Book.topBook());
