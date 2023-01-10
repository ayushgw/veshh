import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Navbar from './Navbar/Navbar'
import HomePage from '../routes/HomePage/HomePage'
import AuthPage from '../routes/AuthPage/AuthPage'
import ShopPage from '../routes/ShopPage/ShopPage'
import CheckoutPage from '../routes/CheckoutPage/CheckoutPage'
import CategoryPage from '../routes/CategoryPage/CategoryPage'

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase'
import { setUser } from '../features/userSlice'
import { setCart } from '../features/cartSlice'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      const userAuth = user ? { uid: user.uid, email: user.email, displayName: user.displayName } : null;

      if (user) {
        createUserDocumentFromAuth(userAuth);
      }
      dispatch(setUser(userAuth));
    })

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('veshh_cart_items')) || [];
    
    console.log(cartItems);
    dispatch(setCart(cartItems));
  }, [dispatch])
  

  return (
    <div style={{ minHeight: '100vh', padding: '20px 40px', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop">
          <Route index element={<ShopPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
        </Route>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}

export default App