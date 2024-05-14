import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { CartState, ICartProduct, RootState } from "src/types";
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartState,
  reducers: {
    add: (state, action: PayloadAction<ICartProduct>) => {
      const { id, ...product } = action.payload;
      const existingProductIndex = state.findIndex((item: ICartProduct) => item.id === id)
      if (existingProductIndex !== -1) {
        state[existingProductIndex] = { id, ...product }
      } else {
        state.push(action.payload);
      }
      console.log(state)
    },
    remove: (state, action:PayloadAction<ICartProduct>) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    clear: state => state = []
  },
});

const selector = (state: RootState): RootState['cart'] => state.cart


export const getAllProductsInCart = () => createSelector(
  selector,
  (products: CartState) => products.map((product: ICartProduct) => ({ ...product }))
)
export const getProductCartById = (id: string) => createSelector(
  selector,
  (products: CartState) => products.find((product: ICartProduct) => product.id === id)
);

export const getTotalPrice = createSelector(
  selector,
  (products: CartState) => {
    let totalPrice = 0;
    products.forEach((product: ICartProduct) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }
);