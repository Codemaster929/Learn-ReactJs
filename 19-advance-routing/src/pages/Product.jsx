import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='text-white flex justify-center gap-10 font-bold text-2xl'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
        <Link to='/product/kids'>Kids</Link>
      </div>
    <Outlet/>
    </div>
  )
}

export default Product
