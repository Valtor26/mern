import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text)
    setText('')
  }

  const [text,setText] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter name' value={text} onChange={(e) => {
          setText(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App