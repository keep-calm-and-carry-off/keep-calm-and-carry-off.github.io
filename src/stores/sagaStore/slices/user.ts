import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangePasswordBodyRq, ChangePwdResponse, IAuthSuccessResponse, IUser } from 'src/api/types';
import { RootState } from '../store';
import { LoginPWD } from 'src/types';

interface UserState {
  token?: string | null;
  userInfo: IUser | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  token: localStorage.getItem('authToken') || null,
  userInfo: JSON.parse(localStorage.getItem('userInfo') || 'null'),
  isAuthenticated: Boolean(localStorage.getItem('isAuthenticated')) || false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequest: (state, action: PayloadAction<LoginPWD>) => state,
    authSuccess: (state, action: PayloadAction<IAuthSuccessResponse>) => {
      const { token, profile } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', token);
      localStorage.setItem('isAuthenticated', String(true));
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isAuthenticated');
    },
    fetchProfileRequest: (state) => state,
    fetchProfileSuccess: (state, action: PayloadAction<IUser>) => {
      state.userInfo = { ...action.payload };
      localStorage.setItem('userInfo', JSON.stringify({ ...action.payload }));
    },
    fetchProfileFailure: (state, action: PayloadAction<string>) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
    regRequest: (state, action: PayloadAction<LoginPWD>) => state,
    regSuccess: (state, action: PayloadAction<IAuthSuccessResponse>) => {
      const { token, profile } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userInfo', JSON.stringify(profile));
      localStorage.setItem('isAuthenticated', String(true));
    },
    regFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isAuthenticated');
    },
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isAuthenticated');
    },
    editProfilePasswordRequest: (state, action: PayloadAction<ChangePasswordBodyRq>) => {},
    editProfilePasswordSuccess: (state, action: PayloadAction<ChangePwdResponse>) => {},
    editProfilePasswordFailure: (state, action: PayloadAction<string>) => {},
  },
});
export const {
  authRequest,
  authSuccess,
  authFailure,
  regRequest,
  regSuccess,
  regFailure,
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
  editProfilePasswordRequest,
  editProfilePasswordSuccess,
  editProfilePasswordFailure,
  logout,
} = userSlice.actions;

export const getIsAuth = (state: RootState) => state.user.isAuthenticated;
export const getProfile = (state: RootState) => state.user.userInfo;

export const userReducer = userSlice.reducer;
