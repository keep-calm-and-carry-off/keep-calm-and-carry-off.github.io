import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  createOrderFailure,
  createOrderRequest,
  createOrderSuccess,
  fetchOrderFailure,
  fetchOrdersRequest,
  fetchOrdersSuccess,
} from '../slices/order';
import {
  IDataErrorResponse,
  IOrder,
  IOrderCreateRequest,
  TypeOrderResponseAllDataRS,
  TypeOrderResponseCreate,
  TypeOrderResponseSuccess,
} from 'src/api/types';
import { serverApi } from 'src/api';
import { setError } from '../slices/app';

function* handleFetchOrdersSaga(action: ReturnType<typeof fetchOrdersRequest>) {
  try {
    const response: TypeOrderResponseAllDataRS = yield call(serverApi.run, 'orders', 'GET', null);
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(fetchOrderFailure(error.errors[0].message));
    } else {
      const data = response.data as TypeOrderResponseSuccess;
      const dataToSave = data.data;
      yield put(fetchOrdersSuccess(dataToSave));
    }
  } catch (e) {
    yield put(fetchOrderFailure(e.message));
  }
}

function* handleCreateOrderSaga(action: ReturnType<typeof createOrderRequest>) {
  try {
    const response: TypeOrderResponseCreate = yield call(
      serverApi.run,
      'orders',
      'POST',
      action.payload as IOrderCreateRequest,
      true
    );
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(fetchOrderFailure(error.errors[0].message));
    } else {
      const data = response.data as IOrder;
      yield put(createOrderSuccess(data));
    }
  } catch (e) {
    yield put(createOrderFailure(e.message));
  }
}

function* watchFetch() {
  yield takeLatest(fetchOrdersRequest.type, handleFetchOrdersSaga);
}

function* watchCreateOrder() {
  yield takeLatest(createOrderRequest.type, handleCreateOrderSaga);
}

export function* ordersSaga() {
  yield all([fork(watchFetch), fork(watchCreateOrder)]);
}
