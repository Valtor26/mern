import React from 'react'
import Card from './components/Card'

const App = () => {

  const profiles = [
    {
      id: 1,
      profilePhoto: "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Abhishek",
      projects: 5,
      prototypes: 3,
    },
    {
      id: 2,
      profilePhoto: "https://images.unsplash.com/photo-1740252117012-bb53ad05e370?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Vishal",
      projects: 8,
      prototypes: 4,
    },
    {
      id: 3,
      profilePhoto: "https://images.unsplash.com/photo-1772371272141-0fbd644b65c4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rohan",
      projects: 2,
      prototypes: 1,
    },
    {
      id: 4,
      profilePhoto: "https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      name: "Rahul",
      projects: 6,
      prototypes: 5,
    },
    {
      id: 5,
      profilePhoto: "https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shruthi",
      projects: 10,
      prototypes: 7,
    },
    {
      id: 6,
      profilePhoto: "https://plus.unsplash.com/premium_photo-1738594383544-496c7cb479a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      name: "Aishwarya",
      projects: 4,
      prototypes: 2,
    },
  ];
  return (
    <div className='parent'>
      {profiles.map(function(prof,idx){
        return <div key={idx}>
          <Card img={prof.profilePhoto} name={prof.name} projects={prof.projects} prototypes={prof.prototypes}/>
        </div>
      })}
    </div>
  )
}

export default App