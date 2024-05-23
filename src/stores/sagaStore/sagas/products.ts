import { call, put, takeLatest, all } from 'redux-saga/effects';
import { serverApi } from 'src/api';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  fetchCategoriesRequest,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  addCategoryRequest,
  addCategoryFailure,
  addCategorySuccess,
} from '../slices/products';
import {
  IDataErrorResponse,
  TypeProductResponse,
  TypeProductsResponse,
  IProduct,
  IProducts,
  ICategories,
  ICategory,
} from 'src/api/types';
import { setError } from '../slices/app';

// Обертка для serverApi.run, которая подходит для использования с call
function* apiCall<T>(...args: Parameters<typeof serverApi.run>): Generator<any, T, any> {
  return yield call(serverApi.run, ...args);
}

// Сага для получения списка продуктов
function* fetchProductsSaga(action: ReturnType<typeof fetchProductsRequest>) {
  try {
    const response: TypeProductsResponse = yield call(serverApi.run, 'products', 'GET', null);
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(fetchProductsFailure(error.errors[0].message));
    } else {
      const data = response.data as IProducts;
      yield put(fetchProductsSuccess(data));
    }
  } catch (e: any) {
    yield put(fetchProductsFailure(e.message));
  }
}

// Сага для получения списка категорий
function* fetchCategoriesSaga(action: ReturnType<typeof fetchCategoriesRequest>) {
  try {
    const response: TypeProductsResponse = yield call(serverApi.run, 'categories', 'GET', null);
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(fetchCategoriesFailure(error.errors[0].message));
    } else {
      const data = response.data as ICategories;
      yield put(fetchCategoriesSuccess(data));
    }
  } catch (e: any) {
    yield put(fetchCategoriesFailure(e.message));
  }
}

// Сага для добавления нового продукта
function* addProductSaga(action: ReturnType<typeof addProductRequest>) {
  try {
    const payloadUnknown: unknown = action.payload;
    const response: TypeProductResponse = yield* apiCall<TypeProductResponse>(
      'products',
      'POST',
      payloadUnknown as Record<string, unknown>,
      true
    );
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(addProductFailure(error.errors[0].message));
    } else {
      const data = response.data as IProduct;
      yield put(addProductSuccess(data));
    }
  } catch (e: any) {
    yield put(addProductFailure(e.message));
  }
}

//Сага для добавления новой категории
function* addCategorySaga(action: ReturnType<typeof addCategoryRequest>): Generator<any, void, any> {
  try {
    const data: Record<string, string> = Object.fromEntries(
      Object.entries(action.payload).map(([key, value]) => [key, value as string])
    );
    const response = yield call(serverApi.run, 'categories', 'POST', data, true);
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(addCategoryFailure(error.errors[0].message));
    } else {
      const data = response.data as IProduct;
      yield put(addCategorySuccess(data));
    }
  } catch (e: any) {
    yield put(addCategoryFailure());
  }
}

// Сага для обновления существующего продукта
function* updateProductSaga(action: ReturnType<typeof updateProductRequest>) {
  try {
    const payloadUnknown: unknown = action.payload;
    const response: TypeProductResponse = yield* apiCall<TypeProductResponse>(
      `products/${(payloadUnknown as IProduct & { id: string }).id}`,
      'PUT',
      payloadUnknown as Record<string, unknown>,
      true
    );
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(updateProductFailure(error.errors[0].message));
    } else {
      const data = response.data as IProduct;
      yield put(updateProductSuccess(data));
    }
  } catch (e: any) {
    yield put(updateProductFailure(e.message));
  }
}

// Вотчеры для отслеживания соответствующих экшенов
function* watchFetchProducts() {
  yield takeLatest(fetchProductsRequest.type, fetchProductsSaga);
}

function* watchAddProduct() {
  yield takeLatest(addProductRequest.type, addProductSaga);
}

function* watchUpdateProduct() {
  yield takeLatest(updateProductRequest.type, updateProductSaga);
}

function* watchFetchCategories() {
  yield takeLatest(fetchCategoriesRequest.type, fetchCategoriesSaga);
}

function* watchAddCategory() {
  yield takeLatest(addCategoryRequest.type, addCategorySaga)
}

// Главная сага для всех вотчеров
export default function* productsSaga() {
  yield all([watchFetchProducts(), watchAddProduct(), watchUpdateProduct(), watchFetchCategories(), watchAddCategory()]);
}
