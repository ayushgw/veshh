import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice.ts';
import productsReducer from '../features/productsSlice.ts';
import modalReducer from '../features/modalSlice.ts';

import { rootSaga } from "../sagas/rootSaga";

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

saga.run(rootSaga)