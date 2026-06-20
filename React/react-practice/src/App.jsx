import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card img="https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Abhishek" projects={2} prototypes={6}/>
      <Card img="https://images.unsplash.com/photo-1740252117012-bb53ad05e370?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Vishal" projects={1} prototypes={7}/>
      <Card img="https://images.unsplash.com/photo-1772371272141-0fbd644b65c4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Rahul" projects={2} prototypes={2}/>
      <Card img="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" name="Rohan" projects={4} prototypes={2}/>
      <Card img="https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Divya" projects={2} prototypes={1}/>
      <Card img="https://plus.unsplash.com/premium_photo-1738594383544-496c7cb479a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" name="Aishwarya" projects={5} prototypes={5}/>
    </div>
  )
}

export default App