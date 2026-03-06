import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState(' ')
  const submitted=(e)=>{
    e.preventDefault()
    console.log('form suubmitted by',title);
    
    settitle(' ')
  }
  return (
    <div>
     <form onSubmit={(e)=>{
      submitted(e)
     }}>
      <label>User:</label>
      <input type="text"
       placeholder='Enter username'
       value={title}
       onChange={(e)=>{
          settitle(e.target.value)   
       }}
       />
      <button>submit</button>
     </form>
    </div>
  )
}

export default App
