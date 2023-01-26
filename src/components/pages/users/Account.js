import React from 'react'
import { useEffect, useState } from 'react'
import Login from "./Login"
import Signup from "./Signup"
import UserHomepage from './UserHomepage'

const Account = ({data, currentUser, setCurrentUser}) => {
    const [message, setMessage] = useState(null)
    const [toggleAuth, setToggleAuth] = useState(false)

    if (!currentUser) {
      return (toggleAuth && <Login setCurrentUser={setCurrentUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>) || (<Signup setCurrentUser={setCurrentUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>)
    
  }

  return (
    <div>
      <UserHomepage currentUser={currentUser} data={data}/>
    </div>
  )
}

export default Account