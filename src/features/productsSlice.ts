import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

interface IProduct {
    id: number,
    title: string;
    imageUrl: string;
    items: IItem[];
}

interface IProductsState {
    products: IProduct[];
    isLoading: Boolean;
}

const initialState: IProductsState = {
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
        getProductsSuccess: (state, { payload }: PayloadAction<IProduct[]>) => {
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
