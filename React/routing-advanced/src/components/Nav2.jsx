import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => {
          navigate('/')
        }} className='bg-amber-400 py-2 px-4 m-2 rounded active:scale-95'>Back to Home</button>
        <button onClick={()=>{
          navigate(-1)
        }} className='bg-amber-400 py-2 px-4 m-2 rounded active:scale-95'>Back</button>
        <button onClick={()=>{
          navigate(+1)
        }} className='bg-amber-400 py-2 px-4 m-2 rounded active:scale-95'>Next</button>
    </div>
  )
}

export default Nav2