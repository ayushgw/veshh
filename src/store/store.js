import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
import productsReducer from '../features/productsSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        products: productsReducer
    }
});