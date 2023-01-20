import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from './Navbar/Navbar'
import GlobalEvents from './GlobalEvents/GlobalEvents'
import HomePage from '../routes/HomePage/HomePage'
import AuthPage from '../routes/AuthPage/AuthPage'
import ShopPage from '../routes/ShopPage/ShopPage'
import CheckoutPage from '../routes/CheckoutPage/CheckoutPage'
import CategoryPage from '../routes/CategoryPage/CategoryPage'

import { checkUserSession, setUser } from '../features/userSlice'
import { setCart } from '../features/cartSlice.ts'

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.user);

  useEffect(() => {
    const user = sessionStorage.getItem('veshh_user') ? JSON.parse(sessionStorage.getItem('veshh_user')) : null;
    if (user) {
      dispatch(setUser(user));
      return;
    }
    dispatch(checkUserSession());
  }, [dispatch])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('veshh_cart_items')) || [];
    dispatch(setCart(cartItems));
  }, [dispatch])

  return (
    <>
      <GlobalEvents />
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          {!user && <Route path="/auth" element={<AuthPage />} />}
          <Route path="/shop">
            <Route index element={<ShopPage />} />
            <Route path="/shop/:category" element={<CategoryPage />} />
          </Route>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App