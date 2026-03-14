import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [space, setspace] = useState([])
const getData=async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=20')
  console.log(response.data);
setspace(response.data)
}


let printuserData='No user available ';
if(space.length>0){
  printuserData=space.map(function(elem,idx){
 return <div>
<a href={elem.url}>
<div >
  
  <img className='h-50 w-60 object-cover rounded-xl' key={idx} src={elem.download_url} alt="img" />
  <p className='font-bold '>{elem.author}</p>
 </div>
 </a>
 </div>
 
 
  })
}


  return (
    <div className='bg-black h-full  w-full p-4'>
   <button onClick={()=>{
    getData()
   }} className='bg-green-500 px-10 py-3 rounded  text-white '> click me </button>
  
<div className='text-white flex flex-wrap gap-5 mt-10 '>
  {printuserData}
</div>


   </div >

  )
}

export default App
