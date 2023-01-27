import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Loader from './Loader/Loader'
import Navbar from './Navbar/Navbar'
import GlobalEvents from './GlobalEvents/GlobalEvents'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { checkUserSession, setUser } from '../features/userSlice'
import { setCart } from '../features/cartSlice'

const HomePage = lazy(() => import('../routes/HomePage/HomePage'));
const AuthPage = lazy(() => import('../routes/AuthPage/AuthPage'));
const ShopPage = lazy(() => import('../routes/ShopPage/ShopPage'));
const CheckoutPage = lazy(() => import('../routes/CheckoutPage/CheckoutPage'));
const CategoryPage = lazy(() => import('../routes/CategoryPage/CategoryPage'));

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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </div>
    </>
  )
}

export default App