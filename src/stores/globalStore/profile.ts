import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { ProfileState, RootState } from "src/types";

export const initialState: ProfileState = {
    id: '',
    login: '',
    password: '',
    accessLevel: -1,
    firstName: '',
    middleName: '',
    lastName: '',
    birthday: '',
    mail: ''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<ProfileState>) => action.payload,
        clearProfile: () => initialState,
        editProfile: (state, action: PayloadAction<ProfileState>) => {
            return { ...state, ...action.payload };
        },
    }
});

export const selector = (state: RootState) => state.profile;

export const getProfile = createSelector(
    selector,
    (profile: ProfileState) => { return {...profile}}
)