import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-8'>
        <h2 className='bg-black text-white uppercase rounded-full font-semibold px-4 py-2'>Target Audience</h2>
        <button className='uppercase bg-gray-200 px-4 py-2 rounded-2xl tracking-wider'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar