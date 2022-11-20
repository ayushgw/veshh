import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../routes/Home/Home'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App