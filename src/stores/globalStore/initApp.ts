import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/types";

export const initAppSlice = createSlice({
    name: 'initApp',
    initialState: false,
    reducers: {
        toggle: (state, action) => {
           return action.payload
        },
    },
});

export const selectorModal = (state: RootState):boolean => state.initApp