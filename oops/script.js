// create a single blueprint and create multiple objects for the same blueprint 


// Constructor Functions
// function Person(name,age,email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }

// let p1 = new Person("Abhishek",22,"aks@gmail.com");

// Prototypes: its a shared memory

// whenever you create a new object using the new keyword a new blank object gets created with all the properties of the original function/class, which uses the memory even if an object doesnt need a particular method or property, for eg a student function has a property named sports : value, here its not mandatory that every student object must have a sports, so we create the sports property as a prototype

// every object created on the constructor func will be having the prototype default value automatically

// function Student(name,age,subject){
//     this.name = name;
//     this.age = age;
//     this.subject = subject;
// }

// Student.prototype.sports = "Football";

// let s1 = new Student("Abhishek",22,"Maths");
// let s2 = new Student("Vishal",25,"Science");
// s2.sports = "Cricket";




// Class: class is like a blueprint

// class Car {
//     constructor(name,company,color){
//         this.name = name;
//         this.company = company;
//         this.color = color;
//     }
//     horn(val){
//         console.log(val);
//     }
// }

// let c1 = new Car("Swift","Suzuki","Gray");
// c1.horn("Peep peep");

//------------------------------------->
// Extends: nothing but inheritance
// Super: sending data to parent class constructor from child class

// class User{
//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.role = "user";
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = `${this.name} : ${text}`;
//         document.body.appendChild(h1);
//     }
// }

// class Admin extends User{
//     constructor(name,age,address){
//         super(name,age,address);
//             this.role = "admin";                
//     }
//     remove(){
//         document.querySelectorAll("h1").forEach(function(el){
//             el.remove();
//         })
//     }
// }

// let u1 = new User("Abhishek",22,"Harihar");
// let u2 = new User("Vishal",25,"Mumbai");
// u1.write("hey");
// u2.write("hello");

// let a1 = new Admin("Deepa",45,"Davanagere");

//----------------------------------------------------------------->

// classical inheritance: the above example is for classical inheritance (class -> class)

// prototypal inheritance: only in js, object inheriting from object

// let coffee = {
//     color : "dark",
//     drink : function(){
//         console.log("gut gut gut");
//     }
// }

// let continental = Object.create(coffee); // Object.create() : connects prototype
// console.log(continental);   

// continental.drink();