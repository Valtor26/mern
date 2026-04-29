// 1) Select the h1 and change its text
// let head = document.querySelector("#heading");
// head.textContent = "Welcome to Trez Youtube channel";

//--------------------------------------------------------->

// 2) Select all <li> elements and print their text using a loop

//if we use querySelectorAll() it creates a array of selected elements, then we apply forEach/for loop on it
// let list = document.querySelectorAll("li");

// list.forEach((val) => {
//   console.log(val.innerText);
// });

//--------------------------------------------------------->

// 3) select a paragraph and replace its content with:
// <b>Updated</b> by JavaScript

// let par = document.querySelector("p");

// par.innerHTML = "<b>Updated</b> by JavaScript";

//--------------------------------------------------------->

// 4) How to get src of an img tag

// let imgSrc = document.querySelector("img");
// console.log(imgSrc.getAttribute("src"));

//--------------------------------------------------------->
// 5) add a title attribute dynamically to a div

// let dv = document.querySelector("div");

// dv.setAttribute("title", "heyDiv");

// console.dir(dv.title);

//--------------------------------------------------------->
//6) remove the disabled attribute from a button
// let btn = document.querySelector("button");

// btn.removeAttribute("disabled");

//--------------------------------------------------------->
// 7) create a new list item <li>New Task</li> and add it to the end of a <ul>

// let ul = document.querySelector("ul");

// let lis = document.createElement("li");
// lis.textContent = "New Task";

// ul.appendChild(lis);

//--------------------------------------------------------->
// 8) create a new image element with a placeholder source and add it at the top of a div

// let dv = document.querySelector("div");
// let img = document.createElement("img");

// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1775873932006-032f1abff1c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
// );
// img.classList.add("placeholder");
// dv.prepend(img);

//--------------------------------------------------------->
// 9) Select the first item in a list and delete it from the dom

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// ul.removeChild(li);

//--------------------------------------------------------->
// 10) Add a highlight class to every even item in a list.

// let lis = document.querySelectorAll("li");
// for (let i = 0; i < lis.length; i++) {
//   if (i % 2 != 0) {
//     lis[i].classList.add("highlight");
//   }
// }

//OR

// let lis = document.querySelectorAll("ul li:nth-child(2n)");
// // li:nth-child(2n) ----> just select every second list item
// lis.forEach((val) => {
//   val.classList.add("highlight");
// });

//--------------------------------------------------------->
//11) set the size of all paragraph to 18px
// let p = document.querySelectorAll("p");

// p.forEach((val) => {
//   val.style.fontSize = "18px";
// });
