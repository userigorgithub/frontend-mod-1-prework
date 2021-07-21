/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.

function sayHello() {
  console.log("Oh, Hello!")
};
sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log("Hello " + name);
};
greetMe("Peter");
greetMe("Oscar");
greetMe("Michael");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function twoPracticeNumbers(number1, number2) {
  console.log(number1 + number2);
}
twoPracticeNumbers(1, 2);
twoPracticeNumbers(2, 3);
twoPracticeNumbers(3, 4);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function bestFriendsForever(name1, name2) {
  console.log(name1 + " and " + name2 + " are BFFS.");
};
bestFriendsForever("Oscar", "Ruck");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

I named it `bestFriendsForever` because end result stated BFFS.
Just naming parameters as `name1` and `name2` seemed like a simple and logical choices.

EXPLAIN:

The answer is just a little above. I am trying to name them such so they can be short enough to type
but also descriptive enough for people and myself to understand.
*/
