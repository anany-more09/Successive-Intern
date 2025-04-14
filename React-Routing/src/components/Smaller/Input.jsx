import React from 'react'

function Input({placeholder}) {
  return (
    <>
    <input 
        type="text"
        placeholder={placeholder}
        className='p-2 m-2 shadow rounded-2xl'
    />
    </>
  )
}

export default Input