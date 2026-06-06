// this keyword: In JavaScript, this is a special keyword that refers to the object that is executing the current function. Its value depends on how a function is called, not where it is defined.

// global scope:
// this refers to the window object in global scope.
// console.log(this);

//---------------------------------------->

// function scope:

// function abc(){
//     console.log(this);
// }

// abc(); //this refers to the global object (window) in function scope.
//---------------------------------------->

// method: fucntion which is inside an object we call it method

// let obj = {
//     name : "Abhishek",
//     sayName : function(){
//         console.log(this.name);
//     }
// }

// obj.sayName(); //Here, this refers to obj that is the object calling the function.
//---------------------------------------->

// event handler:

// let h1 = document.querySelector("h1");

// h1.addEventListener("click",function(){
//     console.log(this.style.color="green");
// })  
//this refers the element on which the event listener is added, so this gives us the h1 tag in above eg..
//---------------------------------------->

// inside class:
// this will be a blank object when we create it using the new keyword

// class Person{
//     constructor(){
//         console.log("hey");
//         this.a = 12;
//     }
// }

// let p1 = new Person();

// console.log(p1.a);

//-------------------------------------->

// arrow functions:
// this again refers to window object,Arrow functions do not have their own this. They inherit this from the surrounding scope (so it inherited from window).


// when this is written for an arrow function then this takes the value from its parent, so if it is written in the wrong way then it refers to the window object

// let obj = {
//      name : "Abhishek",
//      sayName : () => {
//          console.log(this);
//      }
//  }

// obj.sayName();

// correct way to write arrow functions during this 

// let obj ={
//     name : "Abhishek",
//     sayName : function(){ // parent
//         let inner = () => {
//             console.log(this.name);
//         }
//         inner();
//     }
// }

// obj.sayName();

// here arrow function takes the this value from its parent which is sayName : func(),so this value from func() is the object

//----------------------------------->
// call(), apply(), and bind() are methods used to manually set the value of this inside a function.

// Suppose we have this function:

// function greet() {
//   console.log(`Hello ${this.name}`);
// }

// const user = {
//   name: "Abhishek"
// };

// Normally:

// greet(); // this = window (or undefined in strict mode)
// 1. call()

// call() invokes the function immediately and lets you pass arguments separated by commas.

// Syntax
// functionName.call(thisValue, arg1, arg2);
// Example
// function greet(city, country) {
//   console.log(
//     `Hello ${this.name} from ${city}, ${country}`
//   );
// }

// const user = {
//   name: "Abhishek"
// };

// greet.call(user, "Bangalore", "India");
// Output
// Hello Abhishek from Bangalore, India

// Here:

// this → user
// "Bangalore" → city
// "India" → country
// 2. apply()

// apply() is almost the same as call(), but arguments are passed inside an array.

// Syntax
// functionName.apply(thisValue, [arg1, arg2]);
// Example
// function greet(city, country) {
//   console.log(
//     `Hello ${this.name} from ${city}, ${country}`
//   );
// }

// const user = {
//   name: "Abhishek"
// };

// greet.apply(user, ["Bangalore", "India"]);
// Output
// Hello Abhishek from Bangalore, India

// Difference from call():

// call() → comma-separated arguments
// apply() → array of arguments
// 3. bind()

// bind() does not execute immediately.

// It returns a new function with this permanently bound.

// Syntax
// const newFunction = functionName.bind(thisValue);
// Example
// function greet() {
//   console.log(`Hello ${this.name}`);
// }

// const user = {
//   name: "Abhishek"
// };

// const newGreet = greet.bind(user);

// newGreet();
// Output
// Hello Abhishek

// What happened?

// bind() created a new function
// this is permanently set to user
// You can call it later


// call:
// function greet(city,state){
//     console.log(`Hello ${this.name} from ${city}, ${state}`)
// }

// let user = {
//     name: "Abhishek"
// }

// greet.call(user,"Harihar","Karnataka");

// apply
// function greet(city,state){
//     console.log(`Hello ${this.name} from ${city}, ${state}`)
// }

// let user = {
//     name: "Abhishek"
// }

// greet.apply(user,["Harihar","Karnataka"]);

// bind:
// function greet(){
//     console.log(`Hello ${this.name}`)
// }

// let user = {
//     name: "Abhishek"
// }

// let newFunc = greet.bind(user);



