import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { DataContext } from '../context/ThemeContext'




const Navbar = () => {
    
    const [theme,setTheme] = useContext(DataContext)
  return (
    <div className={theme}>
        <h1>Abhishek</h1>
        <Nav2/>
    </div>
  )
}

export default Navbar