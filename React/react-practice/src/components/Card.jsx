import React from 'react'
import "../index.css"

const Card = (props) => {
  return (
    <div className='card'>
        <div className="top">
            <p>...</p>
        </div>
        <div className="center">
            <img src={props.img}alt="" />
            <h2>{props.name}</h2>
        </div>
        <div className="bottom">
            <div className="projects">
                <h2>{props.projects}</h2>
                <p>Projcts</p>
            </div>
            <div className="prototypes">
                <h2>{props.prototypes}</h2>
                <p>Prototypes</p>
            </div>
        </div>
    </div>
  )
}

export default Card