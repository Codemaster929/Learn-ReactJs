import React from 'react'

const App = () => {
  const submitted=(e)=>{
    e.preventDefault()
    console.log('form suubmitted ');
    
    
  }
  return (
    <div>
     <form onSubmit={(e)=>{
      submitted(e)
     }}>
      <label>User:</label>
      <input type="text" placeholder='Enter username' />
      <button>submit</button>
     </form>
    </div>
  )
}

export default App
