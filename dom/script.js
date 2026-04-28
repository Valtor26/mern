//document.getElementById : select using id
//document.getElementsByClassName : select using class name
//document.querySelector("h1") : select using tag name/#id/.class, it selects the first h1 tag
//document.querySelectorAll("h1") : selects all h1 tag

// let abcd = document.querySelector("h1");

// console.dir(abcd);

//----------------------------------------------->
//textContent,innerText: to view/change the text of the selected tag
//innerHTML: to view/change the text, but when changing you can also add a html tag, for eg (line 16) shows how you can make it italic

// let h1 = document.querySelector("h1");

// h1.innerHTML = "<i> Abhishek Kiran</i>";

//------------------------------------------------>
// Attribute Manipulation

// let a = document.querySelector("a");

// console.dir(a);
// a.href = "https://www.youtube.com";

//setAttribute(attribute name like id/class/href,attribute value) --> used to set or change the attribute value of a tag
// a.setAttribute("href", "https://www.youtube.com");

// let img = document.querySelector("img");

// console.dir(img);

// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1768036479363-0810baba6613?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// );

// ------>
//.getAttribute(attribute name) --> it gives the value of the attribute
// let a = document.querySelector("a");

// console.dir(a.getAttribute("href"));

//------->
//removeAttribute(attribute) : removes the specified attribute from the element

// let a = document.querySelector("a");
// a.removeAttribute("href");
// console.log(a.href);

//----------------------------------------------->
//Dynamic Dom manipulation : createElement, appendChild/append, removeChild, prepend
//append --> add at the end as last child
//prepend --> add at the beginning as first child
//createElement(element name) :used to create an element
//removeChild(h1) ---> remove the element

// let h1 = document.createElement("h1");
// h1.innerHTML = "<i>Hello Abhishek";
// document.body.appendChild(h1);

//------------------------------------------------>
//Style Update --> .style,classList (add,remove,toggle)

let h1 = document.querySelector("h1");

console.dir(h1);

// h1.style.color = "white";
// h1.style.backgroundColor = "yellow";

//.classList.add(class value) : dynamically apply styling by adding the class name set in css

// h1.classList.add("hululu");

//h1.classList.remove("hululu"); remove the class from the element

h1.classList.toggle("hululu"); //adds the class if not present or removes the class if present
