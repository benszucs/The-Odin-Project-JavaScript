// Write a constructor for making “book” objects.
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book

// Constructor Function
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

// create a new instance of Book with given details
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

console.log(theHobbit.info());
