import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    type: null,
    content: null
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }) => {
            console.log(payload);
            state.type = payload.type;
            state.content = payload.content;
            state.isOpen = true;
        },
        closeModal: (state, { payload }) => {
            console.log(payload);
            state.isOpen = false;
        }
    },
});

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer;
