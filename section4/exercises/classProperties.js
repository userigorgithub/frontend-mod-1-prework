/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class Dog {

}
var puddle = new Dog();
console.log(puddle);
var yorkie = new Dog();
console.log(yorkie);

// Prompt 2: Snack

class Snack {

}
var fruits = new Snack();
console.log(fruits);
var candyBar = new Snack();
console.log(candyBar);

// Prompt 3: Shirt

class Shirt {

}
var dressShirt = new Shirt();
console.log(dressShirt);
var bottonShirt = new Shirt();
console.log(bottonShirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog {
  constructor() {
    this.name = "Tim";
    this.age = 17;
    this.hasShots = true;
  }
}
var puddle = new Dog();
console.log(puddle);

// Prompt 2: Snack

class Snack {
  constructor() {
    this.name = "Apple";
    this.type = "Fuji";
    this.taste = "Sweet";
  }
}
var fruits = new Snack();
console.log(fruits);

// Prompt 3: Shirt

class Shirt {
  constructor() {
    this.gender = "Male";
    this.generalUse = "Official";
    this.priceInDollars = 130;
  }
}
var dressShirt = new Shirt();
console.log(dressShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog {
  constructor(name, age, hasShots) {
    this.name = name;
    this.age = age;
    this.hasShots = hasShots;
  }
}
var puddle = new Dog("Tim", 17, true);
console.log(puddle);
var yorkie = new Dog("Lucy", 14, false);
console.log(yorkie);

// Prompt 2: Snack

class Snack {
  constructor(name, type, taste) {
    this.name = name;
    this.type = type;
    this.taste = taste;
  }
}
var fruits = new Snack("Apple", "Fuji", "Sweet");
console.log(fruits);
var candyBar = new Snack("Snickers", "Candy Bar", "Very sweet");
console.log(candyBar);

// Prompt 3: Shirt

class Shirt {
  constructor(gender, generalUse, priceInDollars) {
    this.gender = gender;
    this.generalUse = generalUse;
    this.priceInDollars = priceInDollars;
  }
}
var dressShirt = new Shirt("Male", "Official", 130);
console.log(dressShirt);
var bottonShirt = new Shirt("Female", "Every day", 260);
console.log(bottonShirt);
