// Create a variable with a string value
let myVariable = "Hello";
console.log(typeof myVariable); // Output will be "string"

// Reassign the value to a number
myVariable = 5;
console.log(typeof myVariable); // Output will be "number"

// Create variables with different data types
let numberVar = 10;
let stringVar = "Hello";
let booleanVar = true;
let undefinedVar = undefined;
let nullVar = null;
let arrayVar = [1, 2, 3];
let objectVar = { key: "value" };
let functionVar = function() {};

// Check the types of all variables
console.log(typeof numberVar); // Output will be "number"
console.log(typeof stringVar); // Output will be "string"
console.log(typeof booleanVar); // Output will be "boolean"
console.log(typeof undefinedVar); // Output will be "undefined"
console.log(typeof nullVar); // Output will be "object" (This is a quirk in JavaScript)
console.log(typeof arrayVar); // Output will be "object"
console.log(typeof objectVar); // Output will be "object"
console.log(typeof functionVar); // Output will be "function"
