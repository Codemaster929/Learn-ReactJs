// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(20)
//  const [username, setuser] = useState("sahaj")
//  const [hero, sethero] = useState(['spiderman ,','thor, ','ironman'])
//   const clicked=()=>{
//    setnum(35)
//     setuser('sahajAsim')
//     sethero(['batman, ','superman, ','flash'])
//   }
//   return (
//     <div>
//       <h1>the value of num is {num} <br /> user name  is {username} <br /> your heroes are {hero} </h1>
//       <button onClick={()=>{
//         console.log('button clicked!!');
//         clicked()
//       }}>click</button>
//     </div>
//   )
// }

// export default App
/////

// import React from 'react'
// import { useState } from 'react';

// const App = () => {
// const [count, setcount] = useState(0)
// function increaseNum(){
//   setcount(count+1)
// }
// function decreaseNum(){
//   if(count<=0){
//     return 
//   }
//   setcount(count-1)
  
// }

//   return (
//     <div>
//       <div className="box">
//         <h1>{count}</h1>
//       </div>
//       <div className="buttons">
//         <button onClick={increaseNum} className="btn">Increase</button>
//         <button onClick={decreaseNum} className="btn">Decrease</button>
//       </div>
//     </div>
//   )
// }

// export default App

//////////////////////////////

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [user, setuser] = useState({username:"sahaj",age:22})
//  const change=()=>{
// // easy way -------------
//   //  const newuser={...user}
// //  newuser.username='sarthak'
// //  newuser.age=20
// //  console.log(newuser);
// //  setuser(newuser)
//  // normal way----------
//  setuser(prev=>({...prev,age:30,username:'Aman'}))
// }
//   return (
//     <div>
//       <h1>{user.username},{user.age}</h1>
//       <button onClick={change} className='btn'>click</button>
//     </div>
//   )
// }

// export default App

/////////////////////

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [arr, setarr] = useState([10,20,30])
  const clicked=()=>{
    // setarr(prev=>{const newarr=[...prev]; newarr[0]=50; return newarr;}) // for changing only one element !!
    setarr([50,60,70])
  }
  return (
    <div>
      <h1>{arr}</h1>
      <button onClick={clicked} className='btn'>click</button>
    </div>
  )
}

export default App
