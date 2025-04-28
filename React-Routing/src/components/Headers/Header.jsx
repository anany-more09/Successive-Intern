import React, { useState } from 'react'
import { useNavigate, NavLink} from 'react-router-dom'
import Button from '../Smaller/Button'
import Login from './Login';

function Header() {
  
   const [check, setCheck] = useState(true);
   const navigate = useNavigate();

  function handleLogin()
  {
    console.log(check,"ceck")
    if(!check)
    {
      navigate("/signUp")
    }
    else
    {
      navigate('/login')
      setCheck(false)
      console.log(check, "dlirukghlboukdjsbrg")
    }
   
  }
  
  return (
    <>
    <div className='flex justify-between m-3 p-4'>
    <div className='m-3 p-4'>
    <NavLink className= {({isActive}) => isActive ? 'text-red-800 m-2 p-4' : 'text-blue-500 m-2 p-4'} to="/">Home</NavLink>
    <NavLink className= {({isActive}) => isActive ? 'text-red-800 m-2 p-4' : 'text-blue-500 m-2 p-4'} to="/about">about</NavLink>
    <NavLink className= {({isActive}) => isActive ? 'text-red-800 m-2 p-4' : 'text-blue-500 m-2 p-4'} to="/dashboard">dashboard</NavLink>
  </div>
  <div className=' p-3 gap-2'>
    <Button label="LogIn" onclick={handleLogin}/>
     
  </div>
    </div>
    </>
  )
}

export default Header