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