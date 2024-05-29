import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { setAppInit } from '../slices/app';
import { fetchCategoriesRequest, fetchProductsRequest } from '../slices/products';

function* handleInit(action: ReturnType<typeof setAppInit>) {
    yield put(fetchCategoriesRequest());
    yield put(fetchProductsRequest());
}

function* watchInit() {
  yield takeLatest(setAppInit.type, handleInit);
}

export default function* appSaga() {
  yield all([fork(watchInit)]);
}
