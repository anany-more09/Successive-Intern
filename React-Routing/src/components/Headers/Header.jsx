import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='border rounded-2xl m-3 p-4'>
    <Link className='text-red mx-4' to="/">Home</Link>
    <Link className='text-red mx-4' to="/about">about</Link>
    <Link className='text-red mx-4' to="/constacts">constacts</Link>
    <Link className='text-red mx-4' to="/dashboard">dashboard</Link>
  </div>
  )
}

export default Header