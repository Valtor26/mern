// design patterns: a way of writing code in a standard format

// module pattern: its a design pattern in which we write the code inside a self executing function (IIFE), so that variables and functions stays private

// in this function we only return those things that will be used outside the function

// the main advantage of this pattern is data hiding (encapsulation) and clean structure, code stays secure, reusable and manageable

// all the properties and functions inside a IIFE is private, so we should return the things that we need to access outside it

// let fnc = (function(){
//     let bankBalance = 12000;

//     function checkBalance(){
//         console.log(`Your balance is: ${bankBalance}`);
//     }

//     function withDraw(val){
//         bankBalance -= val;
//         console.log(`Withdrawl successfull, Balance: ${bankBalance}`);
//     }

//     function deposit(val){
//         bankBalance += val;
//         console.log(`Deposit successfull, Balance: ${bankBalance}`);
//     }

//     return{
//         checkBalance,
//         withDraw,
//         deposit
//     }
// })()


//---------------------------------------------------------------------------->

// revealing module pattern: same as module pattern but while returning we give alias for each returning function or variable

// let fnc = (function(){
//     let bankBalance = 12000;

//     function checkBalance(){
//         console.log(`Your balance is: ${bankBalance}`);
//     }

//     function withDraw(val){
//         bankBalance -= val;
//         console.log(`Withdrawl successfull, Balance: ${bankBalance}`);
//     }

//     function deposit(val){
//         bankBalance += val;
//         console.log(`Deposit successfull, Balance: ${bankBalance}`);
//     }

//     //in revealing module pattern, we just give a name for the returning things
//     return{
//         check : checkBalance,
//         getMoney: withDraw,
//         addMoney: deposit
//     }
// })()

//-------------------------------------------------------------------------------------->

// Factory pattern: A function that create objects and returns it (factory = object creating machine)

// A factory pattern is a design pattern in which we write a simple function that creates objects and returns it, without using new keyword or class

// the main idea of this pattern is to control the object creation through a function

// whenever you call a factory function, you get a new object which contains the methods and if you want it can also contain the private data 

// this pattern is useful when we want multiple objects of the same type like users, products, tasks etc..

// function createProducts(name,price){
//     let stock = 10;

//     return {
//         name,
//         price,
//         buy(qty){
//             if(qty <= stock){
//                 stock -= qty;
//                 console.log(`${qty} items booked - ${stock} items left`);
//             }
//             else{
//                 if(stock === 0) console.error(`OOPS - Out of stock`);
//                 else console.error(`OOPS - We only have ${stock} items`);
//             }
//         },
//         refill(qty){
//             stock += qty;
//             console.log(`refilled the stock - ${stock} available`);
//         }
//     }
// }

// let iphone = createProducts("iphone",50000);
// let samsung = createProducts("samsung",35000);


//----------------------------------------------------------------->

// Observer pattern: The Observer Pattern in JavaScript is a behavioral design pattern where one object (Subject) notifies multiple dependent objects (Observers) automatically whenever its state changes.

// class Dept{
//     constructor(){
//         this.students = [];
//     }
//     enroll(student){
//         this.students.push(student);
//         console.log(`${student.name} you have enrolled`)
//     }
//     notify(circular){
//         this.students.forEach((stud) =>{
//             stud.update(circular);
//         })
//     }
// }

// class Student{
//     constructor(name){
//         this.name = name;
//     }

//     update(message){
//         console.log(`${this.name} your update: ${message}`);
//     }
// }

// let cse = new Dept();
// let me = new Dept();

// let stud1 = new Student("Abhishek");
// let stud2 = new Student("Vishal");
// let stud3 = new Student("Rahul");

// cse.enroll(stud1);
// cse.notify("Exam from 20th June")
// me.enroll(stud2);
// me.enroll(stud3);
// me.notify("Exam from 30th June");
