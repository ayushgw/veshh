import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../routes/Home/Home'
import Login from '../routes/Login/Login'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App