import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, { payload }) => {
            console.log('set categories');
        },
    },
});

export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer;
