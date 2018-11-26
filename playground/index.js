// https://www.theodinproject.com/courses/javascript/lessons/objects-and-object-constructors?ref=lnav
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
// console.log("Book", Book.prototype)
// console.log("theHobbit", theHobbit.constructor)

// console.log(theHobbit.info());



// --------------------------------------------------------------------
// JavaScript Prototype in Plain Language
// http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language




// Example 1
function PrintStuff(myDocuments) {
  this.documents = myDocuments;
}

// const test = new PrintStuff("Poo")
// console.log(test.documents)

// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
PrintStuff.prototype.print = function () {
  console.log(this.documents);
}

// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
var newObj = new PrintStuff ("I am a new Object and I can print.");

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
// newObj.print (); //I am a new Object and I can print.




// Constructor
//The constructor in this example is Object ()
var myObj = new Object ();
// And if you later want to find the myObj constructor:
// console.log(myObj.constructor); // Object()

// Another example: Account () is the constructor
function Account() {}
var userAccount = new Account ();
// Find the userAccount object's constructor
// console.log(userAccount.constructor); // Account()



// The userAccount object inherits from Object and as such its prototype attribute is Object.prototype.
var userAccount = new Object ();

// So these two are the same. the userAccount object inherits from Object; therefore, its prototype attribute is Object.prototype
// console.log("prototype of Object:", Object.prototype);
// console.log("prototype attribute of userAccount:", userAccount.constructor.prototype);




// Prototype Property: Prototype-based Inheritance
function Plant () {
this.country = "Mexico";
this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor =  function () {
  console.log("I am a " + this.name + " and my color is " + this.color);
}

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
  if (this.isOrganic)
  console.log("I am organic, Baby!");
}

function Fruit (fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
console.log("Fruit prototype before inheritance:", Fruit.prototype)
Fruit.prototype = new Plant ();
console.log("Fruit prototype after inheritance:", Fruit.prototype)
// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit ("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.
console.log(aBanana.amIOrganic());
