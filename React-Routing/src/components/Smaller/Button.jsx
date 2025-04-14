import React from 'react'

function Button({label, onClick}) {

  return (

    <>
     <button className='m-2 p-4' onClick={onClick}>{label}</button>
    </>
    
  )
}

export default Button