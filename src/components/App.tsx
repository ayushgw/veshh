import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import GlobalEvents from './GlobalEvents/GlobalEvents'
import HomePage from '../routes/HomePage/HomePage'
import AuthPage from '../routes/AuthPage/AuthPage'
import ShopPage from '../routes/ShopPage/ShopPage'
import CheckoutPage from '../routes/CheckoutPage/CheckoutPage'
import CategoryPage from '../routes/CategoryPage/CategoryPage'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { checkUserSession, setUser } from '../features/userSlice'
import { setCart } from '../features/cartSlice'

const App = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(store => store.user);

  useEffect(() => {
    const userSession = sessionStorage.getItem('veshh_user');
    const userData = userSession !== null ? JSON.parse(userSession) : null;
    if (userData) {
      dispatch(setUser(userData));
      return;
    }
    dispatch(checkUserSession());
  }, [dispatch])

  useEffect(() => {
    const cartSession = localStorage.getItem('veshh_cart_items');
    const cartItems = cartSession !== null ? JSON.parse(cartSession) : [];
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
          {!user.id && <Route path="/auth" element={<AuthPage />} />}
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