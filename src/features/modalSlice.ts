import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalState extends IPayload {
    isOpen: Boolean;
}

interface IPayload {
    type: String;
    content: Map<String, String>;
}

const initialState: IModalState = {
    isOpen: false,
    type: '',
    content: new Map([])
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }: PayloadAction<IPayload>) => {
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
