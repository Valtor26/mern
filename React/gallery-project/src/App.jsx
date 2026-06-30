import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);

    setUserData(response.data);
  }
  
  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){
      return (
        <div>
          <a href={elem.url} target='_blank'>
            <div key={idx} className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} />
            </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
      );
    })
  }
  return (
    <div className='bg-black h-screen overflow-auto text-white p-4'>
      <div className='flex h-[82%] flex-wrap gap-2'>{printUserData}</div>
      <div className='flex justify-center items-center gap-4 p-4'>
        <button className='bg-amber-400 text-sm cursor-pointer text-black rounded px-4 py-2 font-semibold active:scale-95' onClick={()=>{
          if(index > 1){
            setIndex(index-1); 
            setUserData([])
          }
        }}>Prev</button>
        <h4>Page {index}</h4>
        <button className='bg-amber-400 text-sm cursor-pointer text-black rounded px-4 py-2 font-semibold active:scale-95' onClick={()=>{
          setIndex(index+1);
          setUserData([]) 
        }}>Next</button>
      </div>
    </div>
  )
}

export default App