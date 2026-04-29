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
