import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task]
    copyTask.push({title,note});

    setTask(copyTask);
    setNote('')
    setTitle('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]

    copyTask.splice(idx,1)

    setTask(copyTask);
  }


  return (
    <div className='h-screen bg-black'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='text-white text-3xl px-10 py-20 flex flex-col gap-5'>
        <input type="text" placeholder='Enter notes title' className='border-3 px-5 py-8 w-1/2 h-8 rounded-2xl font-semibold outline-0' value={title} onChange={(e) => {
          setTitle(e.target.value);
        }}/>
        <textarea type="text" placeholder='Write notes' className='border-3 px-5 py-8 w-1/2 rounded-2xl font-semibold outline-0'  value={note} onChange={(e) => {
          setNote(e.target.value);
        }}></textarea>
        <button className='border-3 bg-white text-black px-3 py-4 w-1/2 rounded-2xl font-semibold outline-0 active:scale-95'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-6 h-full overflow-auto'>
          {task.map(function(elem,idx){

            return <div key={idx} className='h-52 w-40 rounded-xl bg-white'>
              <h3 className='font-bold underline'>{elem.title}</h3>
              <p>{elem.note}</p>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-1/3 active:scale-95 rounded-2xl bg-red-500 py-1 text-xs text-white'>Delete</button>
            </div>;
          })}
        </div>
      </div>
    </div>
  )
}

export default App