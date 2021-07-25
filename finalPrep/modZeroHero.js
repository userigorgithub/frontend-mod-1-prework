// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Igor";

var specialAbility = "Immortality";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello there " + heroName + "!";
console.log(greeting);

var catchphrase = "I see you have ${specialAbility}...";
console.log(catchphrase);

// Declare two variables - power AND energy - set to integers

var power = 1;

var energy = 999;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
console.log(fullPower);

var fullEnergy = energy + 150;
console.log(fullEnergy);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;

var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Thanos", "Galactos", "Dr. Freeze"];

var sidekicks = ["Ironman", "Antman", "Spiderman"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Larry");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift([0]);

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sidekicks); //I'm pretty sure the comment above should say that we removed sidekick

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  var dangerLevel = 53;
  var saveTheDay = "To the rescue!";
  var badExcuse = "Uh, I am too tired...";

  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else {
    console.log(saveTheDay);
  }
};
assessSituation();

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
//assessSituation(99, announcement, excuse) > should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
    name: "Stay Puft Marshmallow Man",
    smell: "Mildly sweet",
    weight: 7500,
    citiesDestroyed: ["New York", "Chicago"],
    luckyNumbers: [1, 7, 13]
};
    var address = {
      number: "1984",
      street: "Smith Rd",
      state: "Alabama",
      zip: "00001"
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

  sayName() {
    this.name = "Igor";
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower() {
    this.powerLevel = 10 * 100;
  }
}
// - Create 2 instances of your SuperHero class

var tough = new SuperHero("Gary", "Speed", 15);
var veryTough = new SuperHero("Gary", "Speed", 15);
console.log(tough);

veryTough.sayName();
veryTough.maximizeEnergy();
veryTough.gainPower();
console.log(veryTough);

// Reflection
// What parts were most difficult about this exerise?
// Putting things together.

// What parts felt most comfortable to you?
// Being organized.

// What skills do you need to continue to practice before starting Mod 1?
// Shortcuts, pseudocoding, and annotations...
