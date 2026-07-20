// Generics
// Generic functions
// Generic interfaces
// Generic classes

// Generics are a way to create reusable components in TypeScript that can work with a variety of data types while still maintaining type safety. They allow you to define a function, class, or interface that can operate on different types without losing the benefits of type checking.

// for example, you can create a generic function that takes an array of any type and returns the first element of that array:

function getFirstElement<W>(arr : W[]) : W{
    return arr[0];
}

getFirstElement<number>([1, 2, 3]); // returns 1

// Generic interfaces allow you to define a contract for a set of properties or methods that can work with different types. For example, you can create a generic interface for a key-value pair:
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}  

function keyval(obj : KeyValuePair<string, number>) {
    console.log(`Key: ${obj.key}, Value: ${obj.value}`);
}

keyval({ key: "age", value: 30 }); // Key: age, Value: 30

// Generic classes allow you to create classes that can work with different types. 

class BottleMaker<T> {
    constructor(public name: T) {}
}

let b1 = new BottleMaker<string>("Water Bottle");

let b2 = new BottleMaker<number>(42);


// Export and export default are used to make functions, classes, or variables available for use in other files. In TypeScript, you can use export to export multiple items from a module, while export default is used to export a single item as the default export of the module.

export function add(a: number, b: number): number {
    return a + b;
}

export default class Calculator {
    multiply(a: number, b: number): number {
        return a * b;
    }
}


// Type assertion is a way to tell the TypeScript compiler about the type of a variable when you have more information about it than the compiler does. It allows you to override the inferred type and specify a more specific type for a variable.

let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

// Non-null assertion operator is a way to tell the TypeScript compiler that a value is not null or undefined, even if the compiler cannot determine that from the code. It allows you to assert that a value is not null or undefined and can be used safely.

let myValue: string | null = "Hello, World!";
let length: number = myValue!.length; // The '!' operator asserts that myValue is not null


// type guards are a way to narrow down the type of a variable within a conditional block. They allow you to check the type of a variable and perform different actions based on that type.

function isString(value: unknown): value is string {
    return typeof value === "string";
}   

// type narrowing is a way to narrow down the type of a variable based on the control flow of the program. It allows you to refine the type of a variable based on the conditions that have been checked.

function printLength(value: string | number) {
    if (isString(value)) {
        console.log(value.length);
    } else {
        console.log(value.toString().length);
    }
}


// instance-of is a type guard that checks if an object is an instance of a specific class or constructor function. It allows you to determine the type of an object at runtime and perform different actions based on that type.

class Dog {
    bark() {
        console.log("Woof!");
    }  
} 

class Cat {
    meow() {
        console.log("Meow!");
    }
}   

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

makeSound(new Dog()); // Woof!
makeSound(new Cat()); // Meow!