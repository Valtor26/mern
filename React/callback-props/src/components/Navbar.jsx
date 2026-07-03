import React from 'react'

const Navbar = ({theme,setTheme}) => {

  function changeTheme(){
    setTheme("Dark");
  }
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar