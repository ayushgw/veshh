import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Modal from './Modal/Modal'
import Navbar from './Navbar/Navbar'
import LoadingScreen from './LoadingScreen/LoadingScreen'
import HomePage from '../routes/HomePage/HomePage'
import AuthPage from '../routes/AuthPage/AuthPage'
import ShopPage from '../routes/ShopPage/ShopPage'
import CheckoutPage from '../routes/CheckoutPage/CheckoutPage'
import CategoryPage from '../routes/CategoryPage/CategoryPage'

import { checkUserSession, setUser } from '../features/userSlice'
import { setCart } from '../features/cartSlice'
import Notification from './Notification/Notification'

const App = () => {
  const dispatch = useDispatch();
  const { isOpen, type, content } = useSelector(store => store.modal);
  const { isLoading: isLoadingUser, user, message } = useSelector(store => store.user);
  const [notificationAlert, setNotificationAlert] = useState(false)

  useEffect(() => {
    if (!message) return;

    setTimeout(() => {
      setNotificationAlert(true);
    }, 400)
    setTimeout(() => {
      setNotificationAlert(false);
    }, 4000)
  }, [message])

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
      <Notification message={message} notificationAlert={notificationAlert} />
      {isLoadingUser && <LoadingScreen />}
      <Modal isOpen={isOpen} type={type} content={content} /> 
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