// let nm = document.querySelector("#name");
// let form = document.querySelector("form");
// let hDiv = document.querySelector("#hide");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (nm.value.length <= 2) {
//     hDiv.style.display = "initial";
//   } else {
//     hDiv.style.display = "none";
//   }
// });
//---------------------------------->

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
let esmall = document.querySelector("#emailError");
let psmall = document.querySelector("#passwordError");
let sucSmall = document.querySelector("#success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  esmall.textContent = "";
  psmall.textContent = "";
  sucSmall.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);
  let isValid = true;

  if (!emailans) {
    esmall.textContent = "Invalid email";
    isValid = false;
  }
  if (!passwordans) {
    psmall.textContent = "Invalid password";
    isValid = false;
  }

  if (isValid) {
    sucSmall.textContent = "Login successful";
    sucSmall.style.color = "green";
    email.value = "";
    password.value = "";
  } else {
    sucSmall.textContent = "Something went wrong";
    sucSmall.style.color = "red";
  }
});
