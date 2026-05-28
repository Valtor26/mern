//Events - actions on your screen
//Event listener - reaction of the events

//-------------------------------------------------------->
// Add Event Listener

// let h1 = document.querySelector("h1");
// 1) select the element you want
//addEventListener(type of event, action to take function(){})
// 2) Add event listener 👂 to it based on the action

// h1.addEventListener("click", () => {
//   h1.style.color = "red";
// });

// let p = document.querySelector("p");

// p.addEventListener("dblclick", () => {
//   p.style.color = "green";
// });

//-------------------------------------------------------->
// Remove Event Listener : remove an existing event that is added

// .removeEventListener(which event, which function)

// let p = document.querySelector("p");

// function dblclick() {
//   p.style.color = "red";
// }

// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);

//-------------------------------------------------------->
// let inp = document.querySelector("input");
// // backspace prints null & space prints empty space
// inp.addEventListener("input", (e) => {
//   if (e.data !== null && e.data !== " ") {
//     console.log(e.data);
//   }
// });

//-------------------------------------------------------->
// Change event - its used when we make changes in input, select or textarea

// let sel = document.querySelector("select");
// let h2 = document.querySelector("h2");

// sel.addEventListener("change", (det) => {
//   h2.textContent = `${det.target.value} selected`;
// });
//-------------------------------------------------------->
//Keydown - when a key is pressed/clicked on the keyboard

// let txt = document.querySelector("#txt");

// window.addEventListener("keydown", (e) => {
//   console.log(e);
//   if (e.key === " ") {
//     txt.textContent = "Spc";
//   } else txt.textContent = e.key;
// });
//-------------------------------------------------------->
//click events for file opening

// let btn = document.querySelector("#btn");
// let inp = document.querySelector("#inp");

// btn.addEventListener("click", () => {
//   inp.click();
// });

// inp.addEventListener("change", (del) => {
//   // console.log(del.target.files[0].name);
//   const file = del.target.files[0];
//   if (file) {
//     btn.textContent = file.name;
//   }
// });
//-------------------------------------------------------->
// Form submit
// preventDefault() ---> stops page from reloading when form is submitted

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let body = document.querySelector("body");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1773622597179-44ea0fecd5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
//   );

//   let h3 = document.createElement("h3");
//   h3.textContent = inputs[0].value;

//   let h5 = document.createElement("h5");
//   h5.textContent = inputs[1].value;

//   let p = document.createElement("p");
//   p.textContent = "Software Engineer with internship experience";

//   profile.appendChild(img);
//   card.appendChild(profile);
//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   body.appendChild(card);

//   inputs.forEach((val) => {
//     if (val.type != "submit") {
//       val.value = "";
//     }
//   });
// });
//-------------------------------------------------------->
// Mouseover Event & Mousemove

// let box = document.getElementById("abcd");

// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = "red";
// });

// box.addEventListener("mouseout", () => {
//   box.style.backgroundColor = "rgb(0, 255, 183)";
// });

//mousemove : whenever your mouse moves an event occurs

// let box = document.getElementById("abcd");

// window.addEventListener("mousemove", (evt) => {
//   box.style.top = evt.clientY + "px";
//   box.style.left = evt.clientX + "px";
// });

// object: in above code block, evt is known as object
// target: target is the element on which we click or do any action and it leads to an event
//type: it tells the type of event occurred

//-------------------------------------------------------->
// Event bubling: When an event happens on an element, it first runs on that element, and then propagates (bubbles up) to its parent, then grandparent, and so on up to the root.

// let parent = document.querySelector("#parent");

// let child = document.querySelector("#child");

// parent.addEventListener("click", () => {
//   console.log("Parent Clicked");
// });

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });
//-------------------------------------------------------->
// let ul = document.querySelector("ul");

// ul.addEventListener("click", (e) => {
//   e.target.classList.toggle("lt");
// });
//-------------------------------------------------------->
// Event Capturing: Event capturing is a process where an event propagates from the parent element to the target element, moving from top to bottom in the DOM tree. (reverse of bubbling)

// let parent = document.querySelector("#parent");

// let child = document.querySelector("#child");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked");
//   },
//   true, // true enables event capturing
// );

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });
