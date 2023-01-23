import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/home/Home';
import Reservations from './components/pages/reservations/Reservations';
import Amenities from './components/pages/amenities/Amenities';
import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from 'react';

function App() {

  return (
    <><Navbar />
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/amenities" element={<Amenities/>} />
      </Routes>
    </div>
    </>
  )
}

export default App;