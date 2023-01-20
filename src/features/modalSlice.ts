import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState extends Payload {
    isOpen: Boolean;
}

interface Payload {
    type: String;
    content: Map<String, String>;
}

const initialState: ModalState = {
    isOpen: false,
    type: '',
    content: new Map([])
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }: PayloadAction<Payload>) => {
            console.log(payload);
            state.type = payload.type;
            state.content = payload.content;
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    },
});

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer;
