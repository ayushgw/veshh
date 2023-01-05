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

const getUserAuth = (user) => {
  return user ? { uid: user.uid, email: user.email, displayName: user.displayName } : null;
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(getUserAuth(user));
      }
      dispatch(setUser(getUserAuth(user)));
    })

    return unsubscribe;
  }, [dispatch]);

  return (
    <>
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
    </>
  )
}

export default App