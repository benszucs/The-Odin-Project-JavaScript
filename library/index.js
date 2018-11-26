// Array to store books, we will be looping through this in the render() function to display items on the screen
let myLibrary = [
];



// Target the relevant DOM elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const addBookButton = document.getElementById('addBookButton');
const removeBookButton = document.getElementsByClassName('removeBookButton');
const readBookButton = document.getElementsByClassName('readBookButton');
const bookShelf = document.getElementById('bookShelf');

// Let the event handler of the button be the addBookToLibrary function
addBookButton.addEventListener("click", function() {
  addBookToLibrary();
});


// The Book constructor function
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
};


// ######################################################################
// Render function
// Loops through the myLibrary array and displays each book on the page

function renderBooksToScreen() {
  bookShelf.innerHTML = "";
  for (let [index, book] of myLibrary.entries()) {
    bookShelf.innerHTML += (`
      <ul class="book">
        <li class="label">Title</li>
        <li class="value">${book.title}</li>
        <li class="label">Author</li>
        <li class="value">${book.author}</li>
        <li class="label">Pages</li>
        <li class="value">${book.pages}</li>
        <div class="centreButton">
          <button class="readBookButton ${book.read ? "read" : "not-read"}" data-index="${index}">
            ${book.read ? "Read" : "Not Read"}
          </button>
        </div>
        <button class="removeBookButton" data-index="${index}">X</button>
      </ul>
    `);
  }
  // event handler for the remove book buttons
  // Included here because it needs to be reasiigned every time we render the screen the bookShelf again
  for (let i = 0; i < removeBookButton.length; i++) {
    removeBookButton[i].addEventListener("click", function() {
      removeBookFromLibrary(i);
    });
  }
  // add event handlers to all the read/notread buttons
  for (let i = 0; i < readBookButton.length; i++) {
    readBookButton[i].addEventListener("click", function() {
      toggleReadOnBook(i);
    });
  }
}

// ######################################################################
// Function to add books to library, taking the user's input
function addBookToLibrary() {
  // First read user input
  let title = bookTitle.value;
  let author = bookAuthor.value;
  let pages = bookPages.value;
  let read = bookRead.checked;

  // Check if all the fields have been filled out, if not alert user and terminate the Function
  if (title.trim() === "" || author.trim() === "" || pages.trim() === "") {
    alert("Please fill in all the fields");
    return;
  }

  // We can only get to this point if all the fields have been filled out
  // create a new instance of Book with the user input
  let book = new Book(title.trim(), author.trim(), pages.trim(), read.trim());
  // push the new Book to the library array
  myLibrary.push(book);

  // Reset the fields
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookRead.checked = false;

  // Call render function to render the new book
  renderBooksToScreen();
}

// ######################################################################
// Remove Book Function
function removeBookFromLibrary(removeIndex) {
  myLibrary = myLibrary.filter((book, index) => index != removeIndex);
  renderBooksToScreen();
}


// #######################################################################
// Toggle read
function toggleReadOnBook(index) {
  myLibrary[index].toggleRead();
  renderBooksToScreen();
}


// Add some books initially
myLibrary.push(new Book("The Dark Tower: The Gunslinger", "Stephen King", 224, true));
myLibrary.push(new Book("The Dark Tower II: The Drawing of the Three", "Stephen King", 400, true));
myLibrary.push(new Book("The Dark Tower III: The Waste Lands", "Stephen King", 512, true));
myLibrary.push(new Book("The Dark Tower IV: Wizard and Glass", "Stephen King", 787, true));
myLibrary.push(new Book("The Dark Tower V: Wolves of the Calla", "Stephen King", 714, false));
myLibrary.push(new Book("The Dark Tower VI: Song of Susannah", "Stephen King", 432, false));
myLibrary.push(new Book("The Dark Tower VII: The Dark Tower", "Stephen King", 845, false));



renderBooksToScreen();
