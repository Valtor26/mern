import React from 'react'

const Card = (props) => {
  return (
    <div
      className="w-100 rounded-2xl bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <p className="text-black font-bold text-3xl bg-white mt-10 ml-10 text-center w-10 h-10 rounded-full">
        {props.numb}
      </p>

      <div className="text-white w-80 font-semibold text-4xl mt-40 pl-10">
        <p>{props.text}</p>
      </div>

      <div className="mt-20 ml-10">
        <button
          className={`${props.btnColor} px-6 py-2 rounded-3xl text-white font-bold mb-10`}
        >
          {props.btnText}
        </button>
      </div>
    </div>
  )
}

export default Card