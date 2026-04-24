let inpVal = document.getElementById("amount");
let addIncBtn = document.getElementById("income");
let addExpBtn = document.getElementById("expense");
let balance = document.getElementById("balance");
let bal = 0;
let list = document.getElementById("transactions");
addIncBtn.addEventListener("click", () => {
  if (inpVal.value != "" && !isNaN(inpVal.value) && inpVal.value > 0) {
    bal = bal + parseInt(inpVal.value);
    balance.innerText = bal;
    list.innerHTML += `<li>+ ₹${inpVal.value}</li>`;
    inpVal.value = "";
  } else {
    alert("Enter the amount");
  }
});

addExpBtn.addEventListener("click", () => {
  if (parseInt(inpVal.value) > bal) {
    alert("Please check your amount");
    inpVal.value = "";
  } else if (inpVal.value != "" && !isNaN(inpVal.value) && inpVal.value > 0) {
    bal = bal - parseInt(inpVal.value);
    balance.innerText = bal;
    list.innerHTML += `<li>- ₹${inpVal.value}</li>`;
    inpVal.value = "";
  } else {
    alert("Insufficient balance");
  }
});
