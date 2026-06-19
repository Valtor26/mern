import React from 'react'
import '../index.css'

const PropsCards = (props) => {
  return (
    <div className='card'>
        <img src="https://plus.unsplash.com/premium_photo-1709399200520-89f2f5d46dbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="profile" />
        <h1>{props.name},{props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, nobis.</p>
        <button>View Profile</button>
    </div>
  )
}

export default PropsCards