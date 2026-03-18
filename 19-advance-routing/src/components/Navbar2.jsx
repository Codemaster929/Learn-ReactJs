import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
   let navigate = useNavigate()
    return (
    <div className='bg-teal-800 flex gap-10 p-2'>

      <button
      onClick={()=>{
        navigate('/')
      }}
      className='bg-amber-400 rounded px-3 py-3 '>
        back to home screen
      </button>
      <button 
      onClick={()=>{
        navigate(-1)
      }}
      className='bg-amber-400 rounded px-3 py-3'>Back </button>
      <button 
      onClick={()=>{
        navigate(+1)
      }}
      className='bg-amber-400 rounded px-3 py-3'>Next </button>
    </div>
  )
}
export default Navbar2
