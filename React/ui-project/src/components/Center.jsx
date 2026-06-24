import React from 'react'
import CenterLeft from './CenterLeft'
import CenterRight from './CenterRight'

const Center = () => {
  return (
    <div className='flex gap-10 '>
        <CenterLeft/>
        <CenterRight/>
    </div>
  )
}

export default Center