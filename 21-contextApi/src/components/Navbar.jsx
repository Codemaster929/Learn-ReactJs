import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
  return (
    <div className='nav-bar'>
      <h2 >Sheriyans</h2>
      <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
