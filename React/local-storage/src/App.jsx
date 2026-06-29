import React from 'react'

const App = () => {

  // .setItem("key","value") ---> to set 
  // .getItem("key") ---> get value
  // .removeItem("key") ----> remove single value
  // .clear() ---> clear all data

  const user = {
    uname :  "Abhishek",
    age : 22
  }

  localStorage.setItem('user',JSON.stringify(user));

  let us = localStorage.getItem('user');

  console.log(JSON.parse(us));
  return (
    <div>App</div>
  )
}

export default App