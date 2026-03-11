// import React, { useState } from 'react'

// one way to handle api calling using fetch and then ----------
// const apicalling=()=>{
//   const response = fetch('https://jsonplaceholder.typicode.com/todos')
// response.then((response)=>{
//     const data = response.json()
//     return data 
// }).then((value)=>{
//   console.log(value );
  
// })
// }
// ----------------------
// another way using async await ------

// const App = () => {
//   const apicalling=async ()=>{
//   const response =await fetch('https://jsonplaceholder.typicode.com/todos/11')
//   const data =await response.json()
//   console.log(data);
// setuser(data.title)
// setstats(data.id )
// }
// const [stats, setstats] = useState('')

// const [user, setuser] = useState('')
//   return (
//     <div>
//       <h1>hello,{user} , the id  is {stats}</h1>
//  <button onClick={()=>{
//   apicalling()
 
//  }}>Click me </button>      
//     </div>
//   )
// }

// export default App

// -----------------------------------

// third way ----------- using axios third party function 
import React from 'react'
import axios from 'axios'

const App = () => {
  const apicalling=async ()=>{
    const response =await axios.get('https://jsonplaceholder.typicode.com/todos/11') // cleanest way !!
  console.log(response.data);
  
    
  }
  return (
    <div>
      <button onClick={()=>{
        apicalling()
      }}>click me </button>
    </div>
  )
}

export default App

