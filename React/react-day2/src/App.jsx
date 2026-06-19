import React from "react";
import Card from "./components/Card";
import PropsCards from "./components/PropsCards";

function App(){
  return(
    <>
    {/* <Card/>
    <Card/>
    <Card/> */}
    <div className="parent">
      <PropsCards name="Abhishek"/>
      <PropsCards name="Vishal" age={25}/>
    </div>
    </>
  )
}

export default App;