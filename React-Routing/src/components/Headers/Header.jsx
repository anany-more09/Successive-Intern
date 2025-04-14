import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from '../Smaller/Button'
import Login from './Login';

function Header() {
  
   const [check, setCheck] = useState(true);
   const navigate = useNavigate();

  function handleLogin()
  {
    if(!check)
    {
      navigate("/signUp")
    }
    else
    {
      <Login />
      setCheck(false)
    }
   
  }
  function handleSignup()
  {

  }

  return (
    <>
    <div className='flex justify-between m-3 p-4'>
    <div className='m-3 p-4'>
    <Link className='text-red mx-4' to="/">Home</Link>
    <Link className='text-red mx-4' to="/about">about</Link>
    <Link className='text-red mx-4' to="/dashboard">dashboard</Link>
  </div>
  <div className=' p-3 gap-2'>
    <Button label="LogIn" onclick={handleLogin}/>
    <Button label="SignUp" onclick={handleSignup}/>
  </div>
    </div>
    </>
   
  )
}

export default Header