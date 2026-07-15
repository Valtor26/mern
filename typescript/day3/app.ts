// type inference and annotations

// inference means that typescript will automatically determine the type of a variable based on the value assigned to it. For example:
let x = 10;

// annotations means that we can explicitly specify the type of a variable. For example:
let y: number = 20;
let z: number | string = "hello"; // union type - can be either a number or a string


//--------------------------------------------------------------------->

// Interfaces and Type Aliases

// Interfaces are used to define the shape of an object. For example:

interface User {
    name : string;
    age : number;
    email : string;
    gender? : string; // optional property
}

function getUserInfo(obj: User) {
}

getUserInfo({name:"Abhishek",age:22,email:"aks@gmail.com"});

//---------------------------------------------------------------------->

// Extending Interfaces

// Interfaces can be extended to create new interfaces, and the new interface will inherit all the properties of the original interface and can also have additional properties. For example:

interface Admin extends User {
    admin : boolean;
}


function getAdminInfo(obj: Admin) {
}

//---------------------------------------------------------------------->

// Type Aliases

// Type aliases are used to create a new name for a type. For example: 

type UserID = string;
type chacha = number;

let a : chacha;

let xyz : string | number | boolean; // union type, it looks akward but it is valid, it means that xyz can be either a string, a number or a boolean

//here we can use the type alias to define the type of a variable

type value = string | number | boolean;

let p : value; // now p can be either a string, a number or a boolean


//---------------------------------------------------------------------->

// Union and Intersection Types

// Union types allow a variable to be one of several types. For example:

let id: string | number; // id can be either a string or a number

// Intersection types allow a variable to be a combination of several types. For example:

interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    salary: number;
}

type EmployeeInfo = Person & Employee; // intersection type

let empInfo: EmployeeInfo = {
    name: "John",
    age: 30,
    employeeId: "E123",
    salary: 50000
};

