import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

interface Product {
    id: number,
    title: string;
    imageUrl: string;
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
