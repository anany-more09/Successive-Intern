import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const Dashboard = ()=> {
  return (
    <>
     <div>Dashboard
     <nav>
      <ul>
       <li><Link to="profile">Profile</Link></li>
       <li><Link to="setting">Setting</Link></li>
       <li><Link to="Themes">Theme</Link></li>
       </ul>
     </nav>
     <hr />
     </div>
     <Outlet/>
    </>

  )
}

export default Dashboard