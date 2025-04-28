import React, { useState } from 'react'

function Main() {

    const [user, setUser] = useState("Anany More")


  return (
    <div>
        <Component2 user={user}/>
        <input 
            type="text" 
            placeholder='enter'
            onChange={(e)=>{
                setUser(e.target.value)
            }}
        />
    </div>
  )
}

function Component2(user) {
    return (
      <div>
        <Component3 user = {user}/>
      </div>
    )
  }

  function Component3(user) {
    return (
      <div>
        <Component4  user={user}/>
      </div>
    )
  }

  function Component4(user) {
    return (
      <div>
        <Component5 user ={user}/>
      </div>
    )
  }

  function Component5(user) {
    return (
      <div>
        <h1>Here is the content {user}</h1>
      </div>
    )
  }

export default Main