// let arr = []; array declaration

//let arr = [1,2,3,4,5]
// arr[0] ---> 1
// arr[8] ---> undefined

// let arr = [];
// arr.push(10); //add a new element at the end
// arr.pop(); //deletes the last element
// arr.shift(); //deletes the first element
// arr.unshift(); // adds a new element at the beginning

//arr.splice(2,1); -----> remove elements in between, the first value is the start index and the second value is the number of elements to remove from the start index

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); // ----> [1, 4, 5]

//----------------------------------------------->

//arr.slice(1,2); ----> returns a new array by not modifying the original array, first value is the start index from the original array and the second value is the end index --- until which you want, the end value is treated as end-1,

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 3); // newArr ----->  [2,3]

// arr.reverse(); //-----> reverse the original array

// sort array in ascending order
// arr.sort(function (a, b) {
//   return a - b;
// });

// sort array in descending order
// arr.sort(function (a, b) {
//   return b - a;
// });

//-------------------------------------->

//FOR EACH

// arr.forEach(function (val) {});// it runs for every element in the array --- for eg add 5 to every element in the array

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (val) {
//   console.log(val * 10);
// });

//---------------------------------------->

// MAP

// use map whenever you want to create a new array by using the elements of the original array ---> it always creates a new array and the size is always same as the original array

// whenever you see the word map just create an empty array in your mind and add whatever the map function returns into this empty array

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map(function (val) {
//   return 12;
// }); // newArr ---> [12, 12, 12, 12, 12]

//--------------------------------------------->

//FILTER

//same as map, just imagine an new empty array, the values that are returned as true are stored in the new array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.filter(function (val) {
//   if (val > 4) {
//     return true;
//   }
// }); // newArr ---> [5, 6, 7, 8]

//------------------------------------------->

//REDUCE

//reduce the array elements into a single value, eg. sum of all elements/product of all elements

// let arr = [1, 2, 3, 4, 5];

// let prod = arr.reduce(function (acc, val) {
//   return acc * val;
// }, 1); // prod ---> 120

// acc --> accumulator, it remembers its value every time, the value 1 (line 87) is the initial value of the acc, whenever the acc * val is returned it is remembered/stored into the acc variable
// val --> val is each elements in the array

//----------------------------------------->

//FIND -----> finds and returns the first ever value thats written in the condition

// let arr = [1, 2, 3, 4, 1, 6];

// let va = arr.find(function (val) {
//   return val === 1;
// }); // va ---> 1 (first 1 at index 0)

// let arr = [
//   { id: 1, key: 1 },
//   { id: 2, key: 2 },
//   { id: 3, key: 1 },
// ];

// let va = arr.find(function (val) {
//   return val.key === 1;
// }); // va ---> {id: 1, key: 1}

//----------------------------------------->

//SOME & EVERY

//SOME --> returns true is atleast one element satisfies the condition
// let arr = [56, 67, 75, 88, 43];
// let va = arr.some(function (val) {
//   return val > 86;
// }); // va ---> true

//EVERY ---> true if all satisfies the condition else false if any one is not satisfied

//------------------------------------------->

//DESTRUCTURING

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let [a, b, , c, , , d] = arr;
//a->1,b->2,c->4,d->7
//skip by leaving it empty

//------------------------------------------->

//SPREAD

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [...arr];

// ... is spread operator, used for copying the values, changes in arr2 is not reflected in arr, as its a copy and not a reference
