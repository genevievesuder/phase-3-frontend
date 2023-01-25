import React from 'react'
import { useEffect, useState } from 'react'
import Login from "./Login"
// import Signup from "./Signup"

const Account = ({data}) => {
    const [user, setUser] = useState(null)
    const [toggleAuth, setToggleAuth] = useState(false)

//     if (!user) {
//       return (toggleAuth && <Login setUser={setUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>) || (<Signup setUser={setUser} setToggleAuth={setToggleAuth} setMessage={setMessage}/>)
//       // <Signup />
//   }

  return (
    <div>
        <Login />
    </div>
  )
}

export default Account