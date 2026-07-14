// Basic types 

// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never


// Tuples

let arr: [string,number] = ["abhi",26]; // tuple with string and number, the order matters,the first element must be string and second must be number

// Enums - Enums are a way of giving more friendly names to sets of numeric values. Enums allow us to define a set of named constants.

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "superadmin"
}

enum StatusCodes {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}


// Any - Any is a type that can hold any value. It is used when we don't know the type of a variable at compile time.

let a;
let randomValue: any = 10;

// Unknown - Unknown is a type that can hold any value, but it is safer than any because it requires us to perform type checking before performing operations on the value.

let b: unknown = 10;

// Void - Void is a type that represents the absence of a value. It is used as the return type of functions that do not return a value.

function logMessage(message: string): void {
    console.log(message);
}

// Null and Undefined - Null and Undefined are types that represent the absence of a value. Null is used to represent a deliberate non-value, while Undefined is used to represent an uninitialized variable.

let c: null = null;
let d: undefined = undefined;

// Never - Never is a type that represents values that never occur. It is used as the return type of functions that always throw an error or never return.

function throwError(message: string): never {
    throw new Error(message);
}