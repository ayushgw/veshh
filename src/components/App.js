import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../routes/Home/Home'

const Navbar = () => (
  <h1>Navbar</h1>
)

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