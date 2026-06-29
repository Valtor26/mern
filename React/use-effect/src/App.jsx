import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  // useEffect(function(){
  //   console.log("Use Effect is running...");
  // }) ------> this is called mounting

  useEffect(function(){
    console.log("Use Effect is running...");
  },[num]) //----> dependency list - here the useEffect runs whenever the num state changes


  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num + 1);
      }} onMouseLeave={()=>{
        setNum2(num2 + 10);
      }}>Change</button>
    </div>
  )
}

export default App