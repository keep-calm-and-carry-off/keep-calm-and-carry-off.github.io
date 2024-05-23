import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { IOrder, IOrderCreateRequest } from 'src/api/types';
import { RootState } from '../store';

const initialState: IOrder[] = [];
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrdersRequest: (state) => {},
    fetchOrdersSuccess: (state, action: PayloadAction<IOrder[]>) => {
      state.splice(0, state.length, ...action.payload);
    },
    fetchOrderFailure: (state, action: PayloadAction<string>) => {},
    createOrderRequest: (state, action: PayloadAction<IOrderCreateRequest>) => {},
    createOrderSuccess: (state, action: PayloadAction<IOrder>) => {
      state.push(action.payload);
    },
    createOrderFailure: (state, action: PayloadAction<string>) => {},
  },
});

export const {
  createOrderRequest,
  createOrderSuccess,
  createOrderFailure,
  fetchOrdersRequest,
  fetchOrdersSuccess,
  fetchOrderFailure,
} = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;

const selector = (state: RootState): RootState['orders'] => state.orders;

export const getOrdersByUserId = (id: string) =>
  createSelector(selector, (state: IOrder[]) => {
    return state.filter((order: IOrder) => order.user.id == id);
  });
