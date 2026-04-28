// objects are used when we talk about a single entity and we use array when we talk about multiple entities

// let obj = {
//   id: 400,
//   name: "Abhishek",
// };

// console.log(obj.name);

// let user = {
//   name: "Abhishek",
//   address: {
//     city: "Bengaluru",
//     area: "KS Layout",
//     location: {
//       lnt: 87.98,
//       lng: 77.0,
//     },
//   },
// };
// //object destructuring
// let { lnt, lng } = user.address.location;

//----------------------------------------->

//Looping

// let user = {
//   name: "Abhishek",
//   age: 22,
//   email: "aks@test.com",
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }

//--------------------------------------------->
//Deep Clone: if we copy an object using spread operator, then the nested objects are passed as reference, so we should use json stringify and parse to copy

let user1 = {
  name: "Abhishek",
  address: {
    city: "Bengaluru",
  },
};

let user2 = { ...user1 }; // this passes the reference of the nested object ie address, so

// user2.address.city = "Davanagere"; // this is changed at both user1 and user2

//so we should use JSON

let user3 = JSON.parse(JSON.stringify(user1)); //this create a copy of user1, so changes in user3 is not reflected in user1

//------------------------------------------------->
//optional chaining: used to handle errors, if some key is changed

//suppose someone changes the key (address) to addresses
user1?.address?.city;

//Object.entries() --> creates a array of array with you key and value, 0-->key,1---->value

let course = {
  title: "JavaScript",
  duration: "4 weeks",
};

Object.entries(course).forEach((val) => {
  console.log(`${val[0]} : ${val[1]}`);
});
