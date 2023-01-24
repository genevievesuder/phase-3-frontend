import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Reservations from './components/pages/reservations/Reservations';
import Amenities from './components/pages/amenities/Amenities';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:9393/rooms")
        const data = await resp.json()
        setData(data)
      } catch (error) {
        alert(error)
      }
  }
  fetchData()
  }, []);


  return (
    <><Navbar />
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reservations" element={<Reservations data={data}/>} />
        <Route path="/amenities" element={<Amenities/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;