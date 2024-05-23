import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategories, ICategory, ICategoryAddRequest, IProduct, IProducts } from 'src/api/types';
import { RootState } from '../store';

interface IProductData {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId?: string;
}

const initialStateProducts: IProducts = {
  data: [],
  pagination: {
    pageSize: 5,
    pageNumber: 1,
    total: 0,
  },
  sorting: {
    type: 'ASC',
    field: 'name',
  },
};

const initialStateCategories: ICategories = {
  data: [] as ICategory[],
  pagination: {
    pageSize: 1000,
    pageNumber: 1,
    total: 0,
  },
  sorting: {
    type: 'ASC',
    field: 'name',
  },
};

const initialState = {
  categories: initialStateCategories,
  products: initialStateProducts,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadMoreProducts(state) {
      state.products.pagination.pageNumber++;
    },
    fetchProductsRequest(state) {},
    fetchProductsSuccess(state, action: PayloadAction<IProducts>) {
      const { data, sorting, pagination } = action.payload;
      const filteredData = data.filter((game: IProduct) => game.commandId === 'polyakovad');
      state.products.data = [...filteredData];
      state.products.sorting = sorting;
      state.products.pagination = pagination;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {},
    addProductRequest(state, action: PayloadAction<IProductData>) {},
    addProductSuccess(state, action: PayloadAction<IProduct>) {
      state.products.data.push(action.payload);
    },
    addProductFailure(state, action: PayloadAction<string>) {},
    updateProductRequest(state, action: PayloadAction<IProductData & { id: string }>) {},
    updateProductSuccess(state, action: PayloadAction<IProduct>) {
      const index = state.products.data.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products.data[index] = action.payload;
      }
    },
    updateProductFailure(state, action: PayloadAction<string>) {},
    fetchCategoriesRequest(state) {},
    fetchCategoriesSuccess(state, action: PayloadAction<ICategories>) {
      const { data, sorting, pagination } = action.payload;
      const filteredData = data.filter((category: ICategory) => category.commandId === 'polyakovad');
      state.categories.data = [...filteredData];
      state.categories.sorting = sorting;
      state.categories.pagination = pagination;
    },
    fetchCategoriesFailure(state, action: PayloadAction<string>) {},
    addCategoryRequest(state, action: PayloadAction<ICategoryAddRequest>) {},
    addCategorySuccess(state, action: PayloadAction<ICategory>) {
      state.categories.data.push(action.payload);
    },
    addCategoryFailure(state, action: PayloadAction<string>) {},
  },
});

export const {
  loadMoreProducts,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  addCategoryRequest,
  addCategorySuccess,
  addCategoryFailure,
} = productsSlice.actions;

const selectorProductData = (state: RootState) => state.products.products.data;

export const selectPagination = (state: RootState) => state.products.products.pagination;
export const getProducts = (state: RootState) => state.products.products.data;
export const getCategoryNameById = (state: RootState, id: string) => {
  const findedElArr = state.products.categories.data.filter((category: ICategory) => category.id === id);
  if (findedElArr.length == 1) return findedElArr[0].name;
  return 'Неизвестная категория';
};
export const getGamesByCatId = (categoryId: string) =>
  createSelector([selectorProductData], (products) => {
    if (!categoryId) {
      return products;
    }
    return products.filter((product: IProduct) => product.category.id === categoryId);
  });

export const getGameById = (gameId: string) =>
  createSelector(selectorProductData, (products: IProduct[]) => products.find((product) => product.id == gameId));
export const getCategories = (state: RootState): ICategory[] => state.products.categories.data;
export const productsReducer = productsSlice.reducer;
