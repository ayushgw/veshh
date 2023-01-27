import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModalState extends IPayload {
    isOpen: boolean;
}

interface IPayload {
    type: string;
    content: Map<string, any>;
    closeOnBackdropClick?: boolean;
}

const initialState: IModalState = {
    isOpen: false,
    type: '',
    content: new Map([]),
    closeOnBackdropClick: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }: PayloadAction<IPayload>) => {
            state.type = payload.type;
            state.content = payload.content;
            state.isOpen = true;
            state.closeOnBackdropClick = payload.closeOnBackdropClick;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    },
});

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer;
