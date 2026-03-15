import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import icon from './assets/img.svg'
const App = () => {
const [index, setindex] = useState(1)

  const [space, setspace] = useState([])
const getData=async ()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  console.log(response.data);
setspace(response.data)
}
useEffect(function(){
  getData()
},[index])

let printuserData=<h1 className='text-2xl absolute top-1/3 text-gray-400'>Loading.....</h1>
if(space.length>0){
  printuserData=space.map(function(elem,idx){
 return <div>
  <Card elem={elem} key={idx} />
 
 </div>

 
  })
}


  return (
    <div className='bg-black h-full  w-full '>
      <div className="bg-teal-500 h-15 w-full text-white font-bold p-4 text-2xl flex gap-3"> <img src={icon}alt="" />React-Gallery</div>
  
<div className='text-white flex flex-wrap gap-5 mt-10 justify-center h-[75vh] overflow-auto '>

  {printuserData}
</div>
<div className='flex justify-center gap-15 mt-10 '>
<button className='h-15 w-30 bg-teal-500 rounded font-bold text-white active:scale-95 active:bg-teal-700'
onClick={()=>{

 if(index>1){
 
 setindex(index-1)
 setspace([])

 }

}}
>prev</button>
<h4 className='text-white pt-4 font-semibold'>Page {index}</h4>
<button className='h-15 w-30 bg-teal-500 font-bold text-white  rounded active:scale-95 active:bg-teal-700' 
onClick={()=>{

setindex(index+1)
setspace([])

}}>
  next</button>
</div>

   </div >

  )
}

export default App
