import { Action, Middleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import { authController, authSlice, cartSlice, productsSlice, usersSlice } from './slice';
import { modalSlice } from './modal';
import { USERS } from 'src/helpers/constants/users';
import { ProfileState, RootState } from 'src/types';
import { initAppSlice } from './initApp';
import { getStatusByInit } from './auth';

export const { login, logout } = authSlice.actions;
export const { setProfile, clearProfile, editProfile } = usersSlice.actions;
export const { add: addToCart, remove: removeFromCart, clear: clearCart } = cartSlice.actions;
export const { add: addProduct, remove: removeProduct, edit: editProduct } = productsSlice.actions;
export const { toggle } = modalSlice.actions
export const { toggle:toggleApp } = initAppSlice.actions


const authProfileMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: Action) => {
  const result = next(action);
  const state: RootState = store.getState();
  const authToken = authController.getAuthToken;
  const isAuthenticated = state.auth.isAuthenticated
  const userId = localStorage.getItem('authToken')
  if (userId && userId.length > 0 && !isAuthenticated) {
    
    const users = USERS
    const currentUser = users.find((user:ProfileState) => user.login == userId);
    if (currentUser) {
      store.dispatch(login({
        login: userId,
        password: currentUser.password
      }))
    }

  }

  if (action.type === login.type) {
    if (authToken) {
      const users = USERS
      const currentUser = users.find((user) => user.id === state.auth.id);
      if (currentUser) {
        store.dispatch(setProfile(currentUser));
      }
    } else {
      store.dispatch(clearProfile());
    }
  }
  if (action.type === logout.type) {
    store.dispatch(clearCart())
    store.dispatch(clearProfile());
  }

  return result;
}

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  profile: usersSlice.reducer,
  cart: cartSlice.reducer,
  products: productsSlice.reducer,
  modal: modalSlice.reducer,
  initApp: initAppSlice.reducer
})

export const globalStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authProfileMiddleware)
});