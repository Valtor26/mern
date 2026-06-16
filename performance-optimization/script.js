// debouncing and throttling

// debouncing: whenever you are doing an action and you dont want to trigger a reaction for every action, the reaction occurs only when there is a specific time interval of gap between the actions (like 1 sec, 2 sec, 20 milisec)

// waits until you stop pressing trigger, then fires once

// for eg: when ever you are searching for a product on amazon, lets say a samsung mobile, while entering the name in the search box the suggestions are not showed while typing, but the suggestions are shown when you stop typing for a certain interval of time (2 sec)

// let inp = document.querySelector("input");

// function debouncer(fnc,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fnc(...args);
//         }, delay);
//     }
// }

// inp.addEventListener("input", debouncer(function(e){
//     console.log(e.target.value)
// },1000))\

//--------------------------------------------------------------------------------------->

// throttling

//fires once every second, even if trigger is held continuously

// it fires every time after a particular interval of time while the event is occurring, it stops when the event is stopped

// let inp = document.querySelector("input");

// function throttle(fnc,delay){
//     let currTime = 0;
//     return function(...args){
//         let now = Date.now();
//         if(now - currTime >= delay){
//             currTime = now;
//             fnc(...args);
//         }
//     }
// }

// inp.addEventListener("input",throttle(function(e){
//     console.log("yo");
// },1000));

//------------------------------------------------------------------------------->

// Lazy loading images - intersection observer

// just load only those images that are within the window size (screen size) 


// let imgs = document.querySelectorAll("img");

// let observer = new IntersectionObserver(function(entries,observer){
//     entries.forEach(function(entry){
//         if(entry.isIntersecting){
//             let img = entry.target;
//             img.src = img.dataset.src;
//             img.classList.add("loaded");
//             observer.unobserve(entry);
//         }
//     })
// }, {
//     root : null,
//     threshold : 0.9     
// })


// imgs.forEach(function(img){
//     observer.observe(img);
// })

//------------------------------------------------------------------------------->

// Code Splitting

