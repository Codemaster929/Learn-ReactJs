import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
   <div className='nav'>
<h3>React-Router</h3>
    <div className='list-nav' >
     
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Product</Link>

    </div>
   </div>
     
  )
}

export default Navbar
