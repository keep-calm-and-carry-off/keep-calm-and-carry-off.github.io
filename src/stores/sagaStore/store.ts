import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer, userReducer } from './slices';
import createSagaMiddleware from 'redux-saga';
import userSaga from './sagas/user';
import { productsReducer } from './slices/products';
import { modalReducer } from './slices/modal';
import productsSaga from './sagas/products';
import appSaga from './sagas/app';
import { cartReducer } from './slices/cart';
import { ordersReducer } from './slices/order';
import { ordersSaga } from './sagas/orders';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  products: productsReducer,
  modal: modalReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefauulMiddleware) => getDefauulMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(productsSaga);
sagaMiddleware.run(ordersSaga);

export type RootState = ReturnType<typeof rootReducer>;
