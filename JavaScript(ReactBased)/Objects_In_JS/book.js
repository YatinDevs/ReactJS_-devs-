// Constructor Function ---> constructing Object
// Convention Captial start letter which function are called using new keyword
function Book(title, author, publishedyear) {
  this.title = title;
  this.author = author;
  this.publishedyear = publishedyear;
}

// [[prototype]] is Reference
// prototype is empty object where methods and properties can be added
Book.prototype.booksdetails = function () {
  return `Book with ${this.title} title and was written by ${this.author} which was published in
  ${this.publishedyear}`;
};
// Instances

const book1 = new Book("The Great ", "Scott ", 1925);
const book2 = new Book("Mockingbird", "Harper", 1960);
const book3 = new Book("1984", "George", 1949);

console.log(book1.booksdetails());
console.log(book2.booksdetails());
console.log(book3.booksdetails());
