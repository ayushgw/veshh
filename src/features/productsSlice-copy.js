import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

const initialState = {
    products: null,
    isLoading: true,
    error: false
};

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        try {
            const data = await getCategoriesAndDocuments();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.products = payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = true;
                state.isLoading = false;
                console.log(action);
            })
    }
});

export default productsSlice.reducer;
