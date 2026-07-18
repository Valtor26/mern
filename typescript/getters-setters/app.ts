// in typescript, we can use getters and setters to access and modify the properties of a class. Here's an example of how to implement getters and setters in a TypeScript class:

// The Person class has a private property _name, and we use a getter to retrieve the value of _name and a setter to modify the value of _name.

// _ is used to indicate that the property is private and should not be accessed directly from outside the class. Instead, we use the getter and setter methods to access and modify the property.

// if _ is not used, the property can be accessed directly from outside the class, which can lead to unintended consequences if the property is modified in unexpected ways. By using getters and setters, we can control how the property is accessed and modified, and ensure that any necessary validation or logic is applied when the property is changed.

// we can directly assign a value or get a value from the property using the getter and setter methods, without having to call them explicitly. This makes the code more concise and easier to read.

class Person {
    constructor(public _name: string){

    }
    get name(){
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }
} 

let u1 = new Person("John");
console.log(u1.name); // Output: John   
u1.name = "Jane";
console.log(u1.name); // Output: Jane