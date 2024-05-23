import { createSlice } from "@reduxjs/toolkit";
import { ModalState, RootState } from "src/types";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    } as ModalState,
    reducers: {
        toggle: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});

export const selectorModal = (state: RootState):ModalState => state.modal