// execution context:  whenever the js notices a funtion it creates a execution context for it, execution context has two phases, which is memory phase and execution phase

// Execution Context is the environment in which JavaScript code runs.

// It decides:

// What variables exist
// What functions exist
// What this refers to
// Which line of code is currently running

// Think of it like a box/workspace where JavaScript executes code.

// Types of Execution Context
// 1. Global Execution Context (GEC)

// This is created first when the JS file runs.

// Created only once
// this refers to the window object (in browser)
// Global variables and functions are stored here

// Example:

// var name = "Abhi";

// function greet() {
//   console.log("Hello");
// }

// console.log(name);
// greet();

// Here:

// name variable → stored in Global Execution Context
// greet() function → stored in Global Execution Context
// 2. Function Execution Context (FEC)

// Whenever a function is called, JavaScript creates a new execution context for that function.

// Example:

// function greet() {
//   let msg = "Hello";
//   console.log(msg);
// }

// greet();

// What happens?

// Global Execution Context is created
// greet() is called
// JS creates a Function Execution Context
// msg exists only inside that function
// After execution, function context is removed
// Execution Context has 2 Phases
// 1. Memory Creation Phase (Creation Phase)

// Before code runs, JavaScript scans the code and allocates memory.

// Example:

// console.log(a);

// var a = 10;

// sayHi();

// function sayHi() {
//   console.log("Hi");
// }

// During memory phase:

// a = undefined
// sayHi = function definition

// So:

// console.log(a);

// prints:

// undefined

// because memory was allocated before execution.

// This is related to hoisting.

// 2. Execution Phase

// Now JavaScript executes line by line.

// var a = 10;

// Now:

// a = 10

// Then:

// sayHi();

// Function executes.
