// TERNARY OPERATOR
// Similar to an IF/ELSE statement, a Ternary Operator has a single condition as well as two possible actions (Or code) to be completed based on the condition. However, a Ternary can be written on a single line. Also, a Ternary returns a value.

/*
Syntax Example

(condition) ? value : value;
*/

// Example 1
// If the value of the AGE variable is 16 or more, then the True boolean value will be set to the canDrive variable. If the value of the AGE variable is less than16, then the False boolean value will be set to the canDrive variable.
let age = 20;
let canDrive = (age >= 16) ? true : false;
console.log(canDrive);

// Example 2
// If the length of the PASSWORD string variable is 11 characters or more, then the "Meets Length Requirement" string will be set to the passwordCheck variable. If the length of the PASSWORD string variable is less than 11 characters, then the "Invalid. Does NOT Meet Length Requirement" string will be set to the passwordCheck variable.
let password = "password";
let passwordCheck = (password.length >= 11) ? "Meets Length Requirement" : "Invalid. Does NOT Meet Length Requirement";
console.log(passwordCheck);

// Example 3
// A Ternary can also be used to run some code (AKA complete an action). However, it is better to use an IF ELSE in this situation, because it is easier to read and understand what it is doing.
(true) ? console.log("It was true!") : console.log("It was false!");

// Example 3 (Using IF ELSE)
if (true) {
  console.log("It was True!")
} else {
  console.log("It was False!")
}