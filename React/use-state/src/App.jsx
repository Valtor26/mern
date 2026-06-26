import React, { useState } from 'react'

const App = () => {

  const [users,setUsers] = useState({userName:"Abhishek",age:22})

  //method 1 - destructuring
  const changeUserOne = () => {
    const newUsers = {...users}
    newUsers.userName = "Vishal"
    newUsers.age = 25

    setUsers(newUsers)
  }

  //method 2 - prev
  const changeUserTwo = () =>{
    setUsers(prev=>({...prev,userName:"Vishal",age:23}));
  }
  return (
    <div>
      <h1>{users.userName},{users.age}</h1>
      <button onClick={changeUserOne}>Change One</button>
      <button onClick={changeUserTwo}>Change Two</button>
    </div>
  )
}

export default App