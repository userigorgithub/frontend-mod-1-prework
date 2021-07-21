/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
Between lines 14 and 18 we are looking at the possible results of 'If/Else' conditional statements. If first condition is true, then we pick it and move on. But if 2nd condition is true, we check 1st one, see that it's false, then move to 2nd one and since that one is true, we pick it.

2. What variable has a new value assigned to it after the first if statement executes?
'bearClothing' variable was assigned new value 'hat'.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
'bearClothing''s value would be a 'scarf.' ('doorChoice' value must be only 1 to be triggered)

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27 and 35 we are looking at the possible results of 'If/Else If/Else' conditional statements. There are 4 results are possible (1, 2, 3, or any other number).

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If variable 'bearChoice' is equal to 3, we would run into the room which is full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
If variable 'doorChoice' is equal to 1 and variable 'bearChoice' us equal to 2, we tell the bear that the hat is too small and it starts to cry!

7. What is your favorite ending?
My favotite ending is when the bear gets a scarf and shows a secret passage out ('doorChoice = any number other than 1' and 'bearChoice = 1').
*/
