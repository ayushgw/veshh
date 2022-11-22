import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../routes/Home/Home'
import Auth from '../routes/Auth/Auth'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App