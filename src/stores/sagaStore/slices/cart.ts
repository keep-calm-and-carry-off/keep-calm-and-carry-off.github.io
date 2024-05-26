import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { IOrderProduct } from 'src/api/types';
import { RootState } from '../store';

interface CartState {
  products: IOrderProduct[];
}

const initialState: CartState = {
  products: JSON.parse(localStorage.getItem('ShopCart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IOrderProduct>) => {
      const index = state.products.findIndex(
        (productCart: IOrderProduct) => productCart.product.id === action.payload.product.id
      );
      if (index === -1) {
        state.products.push(action.payload);
      } else {
        state.products[index].quantity = action.payload.quantity;
      }
      localStorage.setItem('ShopCart', JSON.stringify(state.products));
    },
    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      const index = state.products.findIndex(
        (product: IOrderProduct) => product.product.id === action.payload.productId
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
      localStorage.setItem('ShopCart', JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem('ShopCart');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectCart = (state: RootState): CartState => state.cart;

export const getCartProductById = (id: string) =>
  createSelector(selectCart, (cart: CartState) =>
    cart.products.find((productCart: IOrderProduct) => productCart.product.id === id)
  );

export const getTotalPrice = createSelector(selectCart, (cart: CartState) => {
  return cart.products.reduce(
    (total: number, productCart: IOrderProduct) => total + productCart.quantity * productCart.product.price,
    0
  );
});
