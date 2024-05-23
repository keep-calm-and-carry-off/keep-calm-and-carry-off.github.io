import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from 'src/types';
import { RootState } from '../store';

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
export const { toggle } = modalSlice.actions;
export const selectorModal = (state: RootState): ModalState => state.modal;
export const modalReducer = modalSlice.reducer;
