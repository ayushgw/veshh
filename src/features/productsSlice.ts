import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
    id: Number;
    imageUrl: String;
    name: String;
    price: Number;
}

interface Product {
    id: Number,
    title: String;
    imageUrl: String;
    items: Item[];
}

interface ProductsState {
    products: Product[];
    isLoading: Boolean;
}

const initialState: ProductsState = {
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
        getProductsSuccess: (state, { payload }: PayloadAction<Product[]>) => {
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
