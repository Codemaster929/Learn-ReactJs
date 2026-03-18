import React from 'react'

const Navbar = (props) => {
  const passingover=()=>{
    props.settheme('light')  // data is moving from bottom to top 
  }
    return (
    <div>
      <button onClick={()=>{
        passingover()
      }}>Click me</button>
    </div>
  )
}

export default Navbar
