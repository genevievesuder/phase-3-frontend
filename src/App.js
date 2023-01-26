import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Reservations from './components/pages/reservations/Reservations';
import Amenities from './components/pages/amenities/Amenities';
import Account from "./components/pages/users/Account"
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  // const [message, setMessage] = useState(null)
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://127.0.0.1:9393/rooms")
        const data = await resp.json()
        setData(data)
      } catch (error) {
        alert(error)
      }
  }
  fetchData()
  }, []);


  
  return (
    <>
      <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservations" element={<Reservations data={data}/>} />
            <Route path="/amenities" element={<Amenities  data={data}/>} />
            <Route path="/account" element={<Account  currentUser = {currentUser} setCurrentUser ={setCurrentUser} data={data}/>} />
          </Routes>
        </div>
    </>
  )
}

export default App;