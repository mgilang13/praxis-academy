// BINDINGS
let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);

mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1,
  two = 2;
console.log(one + two);

var name = "Gilang";
const greeting = "Hello ";
console.log(greeting + name);

// FUNCTIONS
let greetings = prompt("Enter Passcode");
console.log(greetings);

// CONSOLE LOG FUNCTION
let x = 30;
console.log("The value of x is ", x);

// RETURN THE VALUES
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

// CONTROL FLOW
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

// CONDITIONAL EXECUTION
let theNumber1 = Number(prompt("Pick a number"));
if (Number.isNaN(theNumber1)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

// WHILE LOOPING
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
