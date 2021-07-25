// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare a `function` `buildABear` with 5 `parameters`: name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //Declare variable `greeting` which must be assigned to `string` and has `interpolation` in it
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Declare variable `demographics` which is assigned to an `array`
  var demographics = [name, age];
  //Declare variable `powerSaying` which must be assigned to `string` and has `concatenation` in it
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //Declare an `object` `builtBear` with 6 key-value pairs: basicInfo, clothes, exterior, cost, sayings, isCuddly
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  //Stop `function` by using `return` statement
  return builtBear
}
//Call `function` `buildABear` by using different `arguments`
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');




//FizzBuzz
//Declare a `function` `fizzBuzz` with 3 `parameters`: num1, num2, range
function fizzBuzz(num1, num2, range) {
  //Create a `for` loop with setting `initializer` to 0, `condition` to range, and `increments` by 1
  for (var i = 0; i <= range; i++) {
    //Set first conditional statement and log the result
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //Set second conditional statement and log the result
    } else if (i % num1 === 0) {
      console.log('fizz');
      //Set third conditional statement and log the result
    } else if (i % num2 === 0) {
      console.log('buzz');
      //Set final conditional statement (since others defaulted to `false`) and log the result
    } else {
      console.log(i);
    }
  }
}
//Call `function` `fizzBuzz` by using different `arguments` and see different results
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
