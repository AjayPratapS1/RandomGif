import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  
  const [tag,setTag]=useState('cute cats');
  

  const{gif,loading,fetchData}=useGif(tag);

  return (
    <div className='w-1/2 bg-[#60A5FA]  flex flex-col items-center gap-y-4 rounded-xl border-2 border-[#6B7280]'>
        <p className='mt-3 underline text-2xl font-bold uppercase'> Random {tag} gif</p>
      
      {
        loading ?(<Spinner/>):(<img src={gif} alt='gif' width="450"></img>)
      }
        
        <input
          className=' w-10/12 rounded-lg mx-auto py-2 text-lg text-center'
          onChange={(event)=>(setTag(event.target.value))}
          value={tag}
        />
        
        <button
         onClick={()=>fetchData(tag)}
        className='bg-[#B1D2FF] w-10/12 rounded-lg mx-auto py-2 text-lg font-semibold hover:bg-white transition-all
        duration-200 uppercase mb-4'
        > Generate</button>
    </div>
  )
}

export default Tag