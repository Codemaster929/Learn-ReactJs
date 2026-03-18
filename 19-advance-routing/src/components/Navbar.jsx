import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-teal-700 font-semibold  text-2xl justify-between h-10 items-center px-4 text-white'>
      <h3>Sheriyans</h3>
      <div className='flex gap-10 '>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">Courses</a>
        <a href="/product">Product</a>
      </div>
    </div>
  )
}

export default Navbar
