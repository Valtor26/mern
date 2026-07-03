import React, { createContext, useState } from 'react'

export const DataContext = createContext();

const ThemeContext = (props) => {
    
    const [theme, setTheme] = useState('light')
  return (
    <div>
        <DataContext.Provider value={[theme,setTheme]}>
            {props.children}
        </DataContext.Provider>
    </div>
  )
}

export default ThemeContext