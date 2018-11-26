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



//Prototype Attribute: Accessing Properties on Objects
console.log("---------------------------------------------------------")

// getters/setters
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.fullName);



// Working with prototype
console.log("---------------------------------------------------------")
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)

delete animal.jumps;

console.log( rabbit.jumps ); // ? (3)


// Searching algorithm
console.log("---------------------------------------------------------")
// 1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// 2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


// Why two hamsters are full?
console.log("---------------------------------------------------------")

let hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple


// Why two hamsters are full?
console.log("---------------------------------------------------------")

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

// don't do this!!!
EighthGrader.prototype = Student.prototype

function NinthGrader(name) {
  this.name = name
  this.grade = 9
}

// noooo! not again!
NinthGrader.prototype = Student.prototype

NinthGrader.prototype.sayName = function() {console.log("HAHAHAHAHAHA")}

const carl = new EighthGrader("carl")
carl.sayName() //uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
