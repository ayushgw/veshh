import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
import productsReducer from '../features/productsSlice';
import modalReducer from '../features/modalSlice';

import productsSaga from "../sagas/productsSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        products: productsReducer,
        modal: modalReducer,
    },
    middleware: [saga]
});

saga.run(productsSaga)