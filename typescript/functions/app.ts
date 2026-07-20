// Functions
// Function types
// Optional and default parameters
// Rest parameters
// Overloads


//Functions are a way to group code together to perform a specific task. Functions can take in parameters and return a value. Functions can be defined using the function keyword or as an arrow function.

function greet(name: string) {
    return `Hello, ${name}!`;
}

const add = (a: number, b: number): number => {
    return a + b;
};

// Function types allow you to define the shape of a function, including its parameters and return type. This can be useful for ensuring that functions are used correctly. 

function abcd(name : string,age : number, cb: (value: string)=> void) {
    cb(name);
}


abcd("Abhishek",22,(value : string) => {
    console.log(value);
})

// Optional parameters are parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name.

function greetOptional(name: string, age?: number) {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}!`;
    }   
}

// Default parameters are parameters that have a default value if no value is provided when calling the function.

function greetDefault(name: string, age: number = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Rest parameters allow you to pass an arbitrary number of arguments to a function. They are denoted by three dots (...) before the parameter name.

function abcde(...args : number[]) {

}

abcde(1,2,3,4,5,6,7,8,9,10);

// Spread operator is used to spread the elements of an array or object into individual elements. It can be used in function calls, array literals, and object literals.

let arr1 = [1, 2, 3];
let arr2 = [...arr1];


// Function overloads allow you to define multiple function signatures for a single function. This can be useful for providing different ways to call a function based on the types of the arguments.

function greetOverload(name: string): void;
function greetOverload(name: string, age: number): string;   


function greetOverload(name: string, age?: number): void | string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        console.log(`Hello, ${name}!`);
    }
}