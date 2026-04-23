//var - es5 - funtional & global scope -  can be redeclared and reassigned
//let - es6 - global & blocked scope - cannot be redeclared but reassigned
//const - es6 - cannot be redeclared and reassigned and must be initialized once declared

//-----------------------------------------------------------

// function abc() {
//   if (true) {
//     let a = 10;
//   }
//   console.log(a);
// }

// function abc() {
//   if (true) {
//     var name = "Abhi";
//   }
// }
// console.log("Printing");
// console.log(name);

// const name = "Abhishek";

// function abc() {
//   console.log(name);
// }
// abc();

//-----------------------------------------------------------

// temporal dead zone - the JS compiler knows that the variable exists but it cannot be accessed at the moment

// console.log(age);
// //script.js:21 Uncaught ReferenceError: Cannot access 'age' before initialization
// let age = 22;

//-----------------------------------------------------------

//hoisting -> the declaration of variables are moved up and the initialization stays at the bottom

//var -> hoist -> undefined
// let & const -> hoist -> reference error dut to TDZ

// console.log(age);

// var age = 22;

// 1. var age = undefined -> declaration
// 2. console.log(age); -> undefined is printed on the console
// 3. age = 22; -> initialization

//-----------------------------------------------------------
