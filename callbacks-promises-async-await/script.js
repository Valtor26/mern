// synchronous vs asynchronous

// in js every line of code runs after one another and its a natural pattern, but sometimes in some situation a line of code waits for some process or event to happen but within that the next line of code gets executed

// sync : code which runs line by line
// async : code which runs when its ready 

// console.log("hey1");
// console.log("hey2");
// setTimeout(() => {
//     console.log("hey3");
// }, 3000);
// console.log("hey4"); // 1,2,4,3 ---> because of setTimeout 

//------------------------------------------------------------------------->

// callback pattern & callback hell

// function some(val){
//     setTimeout(() => {
//         console.log(val);
//     }, Math.floor(Math.random()*10) * 1000);
// }

// some(26);

// function some(func){
//     setTimeout(func, Math.floor(Math.random()*10) * 1000);
// }

// some(function(){
//     console.log("hey");
// });

//------------------------------------------------------------------------->

// callback: if a function is sent as parameter to another function, then the parameter function is known as callback

// callback hell : calling one function inside another

// function getUserInfo(username, cb){
//     console.log("Fetching user info....");
//     setTimeout(() => {
//         cb({_id: 400,username,age:22,email:"aks@gmail.com"});
//     }, 3000);
// }

// function getProfiles(id, cb){
//     console.log("Getting profiles.....")
//     setTimeout(() => {
//         cb({_id : id, posts:["hi","hello","hey"]});
//     }, 3000);
// }

// function getSavedPosts(id,cb){
//     console.log("Getting saved posts....")
//     setTimeout(() => {
//         cb({_id : id, saved : ["post1","post2","post3"]});
//     }, 3000);
// }

// getUserInfo("abhishek",function(data){
//     console.log(data);
//     getProfiles(data._id,function(posts){
//         console.log(posts);
//         getSavedPosts(data._id,function(saved){
//             console.log(saved);
//         })
//     })
// })

//------------------------------------------------------------------------------>

// Promises: 

// a promise consists of 2 states, it can either resolve or reject based on the situation, but we have to write the code for both the states

// A promise consists of 3 states:
    // 1. Pending 2.Resolved 3.Rejected
// we will not handle the pending state

// let pm = new Promise(function(res,rej){
//     setTimeout(() => {
//         let num = Math.floor(Math.random()*10);
//         if(num % 2 === 0) res(num);
//         else rej(num);
//     }, 3000);
// })

// pm
// .then(function(val){
//     console.log(`Is Even ${val}`);
// })
// .catch(function(val){
//     console.log(`Is Odd ${val}`);
// })

//------------------------------------------------------------------------->

// async/await: best practice to handle promises i.e .then and .catch

//await: waits for the code
// try is for resolve and catch is for reject

// let pm = new Promise(function(res,rej){
//     setTimeout(() => {
//         let num = Math.floor(Math.random()*10);
//         if(num > 5) res("Resolved with " + num);
//         else rej("Rejected with " +num);
//     }, 1000);
// })

// async function abcd(){
//     try{
//         let val = await pm;
//         console.log(val);
//     }
//     catch(err){ // if promise is rejected it goes to catch as err
//         console.log(err);
//     }
// }

// abcd();

//------------------------------------------------------------------------------------------>