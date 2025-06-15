import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (

    <Fragment>

      <div className='w-full bg-black text-white text-center py-3 mb-2'>
        <h1 className='text-2xl'>Free Delivery on Order Within Helsinki</h1>
      </div>

      <nav className="flex items-center justify-between p-4 bg-white shadow-md px-[5rem]">
        <h1 className="text-xl font-bold">Logo</h1>
        <div className="flex space-x-6">

          <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-black-600 font-bold underline" : "text-gray hover:underline"}>Home</NavLink>

          <NavLink to="/cart" className={({ isActive }) =>
              isActive ? "text-black-600 font-bold underline" : "text-gray hover:underline"}>Cart</NavLink>
          
        </div>
      </nav>


    </Fragment>
    
  )
}

export default NavBar