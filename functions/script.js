// // Functions

// function setName() {
//   //function declaration
// }

// let fnc = function () {
//   //function expression
//   console.log("Hello");
// };

// let fc = () => {
//   //arrow functions
//   console.log("Hello");
// };

// default parameters
// function add(v1 = 0,v2=0){
//   console.log(v1 + v2);
// }

// add()

// ... rest/spread operator
// if ... used in function parameters then its rest operator
// or ... used in arrays and objects then its spread

// function abcd(...val) {
//   console.log(val);
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8); // O/P: --->  8) [1, 2, 3, 4, 5, 6, 7, 8]

//----------------------------------------------------

// first class functions:  functions ko values ki tarah treat kar sakte hai

// let abcd = function () {};

// function abcd(val) {
//   val();
// }

// abcd(function () {
//   console.log("hey");
// });

//-------------------------------------------
// higher order functions : functions that returns functions or accepts functions inside the function parameter

// function abcd(val) {
//   val();
// }

// abcd(function () {
//   console.log("hey");
// });

//or

// function abcd() {
//   return function () {
//     console.log("hue");
//   };
// }

// abcd();

//------------------------------------------------

// pure functions : functions that do not change the value of outer variables

// let a = 10;

// function pure() {
//   console.log("hello");
// }

// // impure : which change the value of external variables
// function impure() {
//   a++;
// }

//----------------------------------

//closure: function that returns a function and the returning function should be using the variables from parent function

// function abcd() {
//   let a = 10;
//   return function () {
//     a++;
//   };
// }

//---------------------------------------------------
// Immediately Invoked Function Expression: called directly -- no need to call explicitly
// (function () {})();

//-----------------------------------------------------

// hoisting is possible only in function declaration and not in function expression

// abcd();

// function abcd() {
//   console.log("jew");
// } //valid
//---------------------------------------
// abcd();
// let abcd = function () {
//   console.log("jew");
// }; //script.js:109 Uncaught ReferenceError: Cannot access 'abcd' before initialization

//-------------------------------------------------------

// function sum(...val) {
//   let el = 0;
//   val.forEach((val) => {
//     el += val;
//   });
//   console.log(el);
// }

// sum(1, 2, 3, 4, 5, 6);
