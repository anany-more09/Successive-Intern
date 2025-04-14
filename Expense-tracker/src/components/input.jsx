import React from 'react'

function Input({placeholder, value, onChange}) {
  return (
      <>
        <input 
            type="text" 
            placeholder={placeholder}
            required 
            value={value} 
            onChange={onChange}
            className='m-2 p-2 border border-purple-400 rounded-2xl'
        />
      </>
  )
}

export default Input