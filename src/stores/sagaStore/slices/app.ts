import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/stores/sagaStore/store';

interface AppState {
  isAppInitialized: boolean;
  error: {
    message: string;
    code: string;
  } | null;
}

const initialState: AppState = {
  isAppInitialized: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppInit: (state) => {
      state.isAppInitialized = true;
    },
    setError: (state, { payload }: PayloadAction<{ message: string; code: string }>) => {
      state.error = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setAppInit, setError, clearError } = appSlice.actions;

const selector = (state: RootState): RootState['app'] => state.app;

export const getStateApp = createSelector(selector, (state: AppState) => state.isAppInitialized);
export const getError = createSelector(selector, (state: AppState) => state.error);
export const appReducer = appSlice.reducer;
