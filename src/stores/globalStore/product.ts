import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { INIT_PRODUCTS } from "src/helpers/constants/products";
import { Product } from "src/homeworks/ts1/3_write";
import { ProductState, RootState } from "src/types";

export const productsSlice = createSlice({
    name: 'products',
    initialState: INIT_PRODUCTS as ProductState,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
        remove: (state, action: PayloadAction<Pick<Product, 'id'>>) => {
            return state.filter(product => product.id !== action.payload.id);
        },
        edit: (state, action: PayloadAction<Product>) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index != -1) state[index] = action.payload;
        }
    },
});

export const selectorProducts = (state: RootState) => state.products
export const getProducts = createSelector(
    selectorProducts,
    (products: ProductState) => products.map((product:Product) => ({...product}))
)

export const getProductById = (id:string) => createSelector(
    selectorProducts,
    (products:ProductState) => products.find((product:Product) => product.id === id)
);