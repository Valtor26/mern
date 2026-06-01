// localStorage --> it stores permanent browser data, closing of browser will not delete the data stored in localStorage

// localStorage only accepts strings, arrays and objects are not properly handled

// So we can store array as string using JSON.stringify() ---> it converts array into string

// localStorage.setItem("friends", JSON.stringify(["abhi", "vishal", "rahul"]));

// ---> localStorage
// ---> Storage {friends: '["abhi","vishal","rahul"]', length: 1}friends: "[\"abhi\",\"vishal\",\"rahul\"]"length: 1[[Prototype]]: Storage
// localStorage.getItem("friends")
// '["abhi","vishal","rahul"]' ---> we get it as string, so in order it to get it as array then we use JSON.parse();

// JSON.parse(localStorage.getItem("friends"));
// we get ----> ['abhi', 'vishal', 'rahul']

//----------------->

// store data:
//syntax: localStorage.setItem(variable,value)

// localStorage.setItem("name", "Abhishek");
//--------------------->

// get data:
// syntax: localStorage.getItem(variable);

// let val = localStorage.getItem("name");
// console.log(val);
//--------------------->

//remove item
// syn: localStorage.removeItem("name");

// localStorage.removeItem("name");
//--------------------->

// update item
// use the same setItem to update the value

// localStorage.setItem("name", "Vishal"); // first value
// localStorage.setItem("name", "Abhishek"); // updated value

// Clear everything
// localStorage.clear();
//--------------------------------->

// sessionStorge --> it stores temporary session data, closing the tab or session will delete the stored data
// same methods are used as used in the localStorage (setItem, removeItem, getItem, clear)
//------------------------------------>

// cookies ---> cookies store small data mainly for authentication and are sent to the server with every request
// ~4kb
// ~5mb in local and session storage

// syntax: document.cookie = "email=aks@gmail.com";

// document.cookie = "name=Abhishek";
// document.cookie = "age=22";
