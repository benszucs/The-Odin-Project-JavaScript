// Array to store books, we will be looping through this in the render() function to display items on the screen
let myLibrary = [
  {title: "asd", author: "asd", pages: "123", read: true},
  {title: "asd", author: "asd", pages: "123", read: false},
  {title: "asd", author: "asd", pages: "123", read: true},
];



// Target the relevant DOM elements
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const addBookButton = document.getElementById('addBookButton');
const removeBookButton = document.getElementsByClassName('removeBookButton');
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
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}


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
        <li class="">${book.read ? "Read" : "Not Read"}</li>
        <li><button class="removeBookButton" data-index="${index}">X</button></li>
      </ul>
    `);
  }
  // event handler for the remove book buttons
  // Included here because it needs to be reasiigned every time we render the screen the bookShelf again
  for (let i = 0; i < removeBookButton.length; i++) {
    removeBookButton[i].addEventListener("click", function() {
      removeBookFromLibrary(removeBookButton[i].dataset.index);
    });
  }
}
renderBooksToScreen();

// ######################################################################
// Function to add books to library, taking the user's input
function addBookToLibrary() {
  // First read user input
  let title = bookTitle.value;
  let author = bookAuthor.value;
  let pages = bookPages.value;
  let read = bookRead.checked;

  // Check if all the fields have been filled out, if not alert user and terminate the Function
  if (title === "" || author === "" || pages === "") {
    alert("Please fill in all the fields");
    return;
  }

  // We can only get to this point if all the fields have been filled out
  // create a new instance of Book with the user input
  let book = new Book(title, author, pages, read);
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
