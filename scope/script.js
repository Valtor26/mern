// scope: area until which i can access the created variables and functions

// functional scope: only accessible inside functions
// global: can be accessed anywhere
// block: only accesible within the curly braces

// function abcd() {
//   var a = 12;
// }

// console.log(a); //script.js:11 Uncaught ReferenceError: a is not defined
// at script.js:11:13
//-------------------------------------->

// Lexical scope & Dynamic scope

// 1. Lexical Scoping (Static Scoping) in JavaScript

// Lexical scoping means scope is determined by where variables/functions are written in the code (their position).

// In JavaScript, lexical scoping is used, not dynamic scoping.

// Example:

// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     console.log(a);
//     console.log(b);
//   }

//   inner();
// }

// outer();

// Output:

// 10
// 20

// Why?

// Because inner() can access variables from its parent scope (outer) and global scope.

// JS checks variables like this:

// Current scope
// ↓
// Parent scope
// ↓
// Global scope

// This is called the scope chain.

// Important Point:

// The scope depends on where the function is written, not where it is called.

// Example:

// let name = "Global";

// function show() {
//   console.log(name);
// }

// function test() {
//   let name = "Local";
//   show();
// }

// test();

// Output:

// Global

// Why?

// Because show() was written in global scope, so it looks for name there.

// 2. Dynamic Scoping

// Dynamic scoping means scope is decided based on where the function is called.

// JavaScript does NOT use dynamic scoping.

// If JS had dynamic scoping:

// let name = "Global";

// function show() {
//   console.log(name);
// }

// function test() {
//   let name = "Local";
//   show();
// }

// test();

// Output would be:

// Local

// because show() was called inside test().

// But in JavaScript the actual output is:

// Global

// because JS uses lexical scoping.

//---------------------------------------->
// closures: function that returns a function and the returning function should be using the variables from parent function

// function abcd() {
//   let x = 10;
//   return function () {
//     x = x + 1;
//     console.log(x);
//   };
// }

// let ans = abcd();

// its true that whenever a function ends all its member functions and variables should also be destroyed, but when its closure js creates a backlink (remembers it) for all the func and varibles of the parent function in a memory space called [[environment]]

// for every parent function call a new [[enviroment]] is created

// let fnc1 = parent(); //---> seperate [[env]]
// fnc1();
// fnc1();

// let fnc2 = parent(); //---> seperate [[env]]
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();

// pros and cons:
// private variables
//global pollution
