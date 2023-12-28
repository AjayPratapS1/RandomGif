import useGif from '../hooks/useGif';
import Spinner from './Spinner';


const Random = () => {
  
  const {gif,loading,fetchData}=useGif();
  return (
    <div className='w-1/2 bg-[#4ADE80]  flex flex-col items-center gap-y-4 rounded-xl border-2 border-[#6B7280]'>
        <p className='mt-3 underline text-2xl font-bold uppercase'>a Random gif</p>
      
      {
        loading ?(<Spinner/>):(<img src={gif} alt='gif' width="450"></img>)
      }
        
        
        <button
         onClick={()=>fetchData()}
        className='bg-[#C9F5D9] w-10/12 rounded-lg mx-auto py-2 text-lg font-semibold hover:bg-white transition-all
        duration-200 uppercase mb-4'
        > Generate</button>
    </div>
  )
}

export default Random