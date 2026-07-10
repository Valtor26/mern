import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decbyfive, decrement, incByAmount, incbyfive, increment } from './features/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>
      <button onClick={()=>{
        dispatch(incbyfive())
      }}>increment by 5</button>
      <button onClick={()=>{
        dispatch(decbyfive())
      }}>decrement by 5</button>
      <button onClick={()=>{
        dispatch(incByAmount(10))
      }}>increment by value</button>
    </div>
  )
}

export default App