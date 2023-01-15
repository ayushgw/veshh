import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// import Loader from './Loader/Loader'
import LoadingScreen from './LoadingScreen/LoadingScreen'
import Modal from './Modal/Modal'
import Navbar from './Navbar/Navbar'
import HomePage from '../routes/HomePage/HomePage'
import AuthPage from '../routes/AuthPage/AuthPage'
import ShopPage from '../routes/ShopPage/ShopPage'
import CheckoutPage from '../routes/CheckoutPage/CheckoutPage'
import CategoryPage from '../routes/CategoryPage/CategoryPage'

import { checkUserSession } from '../features/userSlice'
import { setCart } from '../features/cartSlice'
import Notification from './Notification/Notification'

const App = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(store => store.modal);
  const { isLoading: isLoadingUser, hasSignedIn, message } = useSelector(store => store.user);
  const [notificationAlert, setNotificationAlert] = useState(false)

  useEffect(() => {
    setNotificationAlert(true);
    setTimeout(() => {
      setNotificationAlert(false);
    }, 3000)
  }, [message])

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('veshh_cart_items')) || [];
    dispatch(setCart(cartItems));
  }, [dispatch])

  return (
    <>
      {notificationAlert && <Notification message={message} />}
      {isLoadingUser && <LoadingScreen />}
      <div style={{ minHeight: '100vh', padding: '20px 40px', display: 'flex', flexDirection: 'column' }}>
        {isOpen && <Modal />}
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          {!hasSignedIn && <Route path="/auth" element={<AuthPage />} />}
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