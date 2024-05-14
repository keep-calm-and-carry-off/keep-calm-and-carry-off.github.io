import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/types";
import { USERS } from "src/helpers/constants/users";
import CryptoJS from 'crypto-js';
import { ActionAuth, AuthState } from "src/types";
import { WritableDraft } from 'immer';

const initialState: AuthState =  {
    token: null,
    isAuthenticated: false,
    accessLevel: -1,
    id: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state: WritableDraft<AuthState>, action: ActionAuth) => {
            const { login, password } = action.payload
            const user = USERS.find(user => user.login === login && user.password === password)
            if (user) {
                state.id = user.id;
                state.isAuthenticated = true;
                state.token = login
                state.accessLevel = user.accessLevel
                localStorage.setItem('authToken', state.token);
            }
            else {
                state.token = '';
                state.isAuthenticated = false;
                state.accessLevel = -1
                state.id = '';
                localStorage.setItem('authToken', state.token);
            }

        },
        logout: (state: WritableDraft<AuthState>) => {
            state.token = null;
            state.isAuthenticated = false;
            state.accessLevel = -1
            state.id = '';
            localStorage.removeItem('authToken');
        },
    },
});

export const authSelector = (state: RootState) => state.auth;

export const authController = {
    getAuthToken: createSelector(
        authSelector,
        (authToken) => authToken.token
    ),
    getAuthUserId: createSelector(
        authSelector,
        (authUser) => authUser.id
    ),
    getAuthStatus: createSelector(
        authSelector,
        (statusAuth) => statusAuth.isAuthenticated
    )
}
export const getStatusByInit = () => createSelector(
    authSelector,
    (status) => status.isAuthenticated
)