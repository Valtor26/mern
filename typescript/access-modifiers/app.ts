// public access modifier is the default access modifier in TypeScript. It allows the class members to be accessible from anywhere, both inside and outside the class.

// private access modifier restricts the access of class members to only within the class. It cannot be accessed from outside the class or by any derived classes, but typescript will compile the code without any error. However, it will throw an error at runtime if we try to access the private members from outside the class or by any derived classes.

// protected access modifier allows the class members to be accessible within the class and its derived classes, but not from outside the class hierarchy, but typescript will compile the code without any error. However, it will throw an error at runtime if we try to access the protected members from outside the class hierarchy.

// optional access modifier:

// readonly access modifier allows the class members to be read-only, meaning they can only be assigned a value during initialization or in the constructor, and cannot be modified afterwards.


//typescript compile a code without any error if we try to access the readonly members from outside the class or by any derived classes. However, it will throw an error at runtime if we try to modify the readonly members from outside the class or by any derived classes.

class Person {
    constructor(public readonly name: string){

    }

    changeName(){
        this.name = "Vishal"; // cannot assign to 'name' because it is a read-only property
    }
}

let p1 = new Person("Abhishek");
console.log(p1.name); // Output: Abhishek   

p1.changeName();
console.log(p1.name); // Output: Vishal


// ? optional access modifier: The optional access modifier allows class members to be optional, meaning they may or may not be present in an instance of the class. This is achieved by using the '?' symbol after the member name.

class Student{
    constructor(public name: string, public age: number, public gender?: string){ //gender is optional 
    }
}

// parameter property declaration is a shorthand syntax in TypeScript that allows us to declare and initialize class properties directly in the constructor parameters. This eliminates the need to explicitly declare the properties and assign values to them in the constructor body.

