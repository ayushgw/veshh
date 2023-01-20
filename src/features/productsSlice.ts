import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsFetch: (state) => {
            state.isLoading = true;
        },
        getProductsSuccess: (state, { payload }) => {
            state.products = payload;
            state.isLoading = false;
        },
        getProductsFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getProductsFetch, getProductsSuccess, getProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;
