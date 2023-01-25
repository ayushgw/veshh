import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export interface IProduct {
    id: number,
    title: string;
    imageUrl: string;
    items: IItem[];
}

interface IProductsState {
    products: IProduct[];
    isLoading: boolean;
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
        getProductsFailure: (state, { payload }: PayloadAction<Error>) => {
            console.log(payload);
            state.isLoading = false;
        }
    }
});

export const { getProductsFetch, getProductsSuccess, getProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;
