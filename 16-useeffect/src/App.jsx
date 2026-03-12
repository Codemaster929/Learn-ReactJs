import React, { useEffect, useState } from 'react'

// const App = () => {

// const [num, setnum] = useState(0)
// const [num2, setnum2] = useState(100)

// const change1=()=>{
//   setnum(num+1);
// }
// const change2=()=>{
//   setnum2(num2+10)
// }
// useEffect(function(){
//   console.log('using useeffect here....');
  
// },[num2])
//   return (
//     <div>
//       <h1>num is {num}
//       </h1>
//       <h1> num2 is {num2}</h1>
//       <button
//       onMouseEnter={()=>{
//         change1()
//       }}
//       onMouseLeave={()=>{
//         change2()
//       }}
//       >Change</button>

//     </div>
//   )
// }

// export default App


///////////////////



const App = () => {

const [a, setA] = useState(0)
const [b, setB] = useState(0)

function aChanging(){
  console.log('A ki value is changed ');
}
function bChanging(){
  console.log('B ki value is changed ');
}
useEffect(function(){
  aChanging()
  
},[a])
useEffect(function(){
  bChanging()
},[b])

  return (
    <div>
  <h1>A is {a}</h1>
  <h1>B is {b}</h1>
  <div id="btnArea">
    <button onClick={()=>{
      setA(a+1)
    }}>
      change A
    </button>
    <button onClick={()=>{
      setB(b-1)
    }}>
      change B
    </button>
    </div>    
    </div>
  )
}

export default App
