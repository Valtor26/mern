import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex gap-4 justify-center items-center py-4 font-semibold'>
            <Link to= '/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
        </div>

        <Outlet/>
    </div>
  )
}

export default Product