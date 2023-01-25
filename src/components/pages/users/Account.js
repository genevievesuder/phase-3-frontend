import React from 'react'
import { useEffect, useState } from 'react'
import Login from "./Login"
import Signup from "./Signup"
import UserHomepage from './UserHomepage'

const Account = ({data}) => {
    const [user, setUser] = useState(null)
    const [message, setMessage] = useState(null)
    const [toggleAuth, setToggleAuth] = useState(false)

    if (!user) {
      return (toggleAuth && <Login setUser={setUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>) || (<Signup setUser={setUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>)
    
  }

  return (
    <div>
      <UserHomepage />
    </div>
  )
}

export default Account