import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import HomePage from '../routes/HomePage/HomePage'
import AuthPage from '../routes/AuthPage/AuthPage'
import ShopPage from '../routes/ShopPage/ShopPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App