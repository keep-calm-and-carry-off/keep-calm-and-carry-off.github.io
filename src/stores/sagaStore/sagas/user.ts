import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { serverApi } from 'src/api';
import {
  authRequest,
  authSuccess,
  authFailure,
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
  logout,
  regRequest,
  regFailure,
  regSuccess,
  editProfilePasswordRequest,
  editProfilePasswordFailure,
} from '../slices/user';
import {
  TypeAuthResponse,
  TypeProfileResponse,
  IDataErrorResponse,
  IAuthSuccessResponse,
  IProfile,
  ChangePwdResponse,
  ChangePasswordResult,
} from 'src/api/types';
import { setError } from '../slices/app';
function* handleAuth(action: ReturnType<typeof authRequest>) {
  try {
    const { email, password } = action.payload;
    const response: TypeAuthResponse = yield call(serverApi.run, 'signin', 'POST', { email, password });
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(authFailure(error.errors[0].message));
    } else {
      const data = response.data as IAuthSuccessResponse;
      yield put(authSuccess(data));
      yield put(fetchProfileRequest());
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('isAuthenticated', String(true));
    }
  } catch (error: any) {
    yield put(authFailure(error.message));
  }
}

function* handleReg(action: ReturnType<typeof regRequest>) {
  try {
    const { email, password } = action.payload;
    const response: TypeAuthResponse = yield call(serverApi.run, 'signup', 'POST', { email, password });
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(regFailure(error.errors[0].message));
    } else {
      const data = response.data as IAuthSuccessResponse;
      yield put(regSuccess(data));
      yield put(fetchProfileRequest());
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('isAuthenticated', String(true));
    }
  } catch (error: any) {
    yield put(authFailure(error.message));
  }
}

function* handleFetchProfile() {
  try {
    const response: TypeProfileResponse = yield call(serverApi.run, 'profile', 'GET', null, true);

    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(fetchProfileFailure(error.errors[0].message));
    } else {
      const data = response.data as IProfile;
      yield put(fetchProfileSuccess(data));
      localStorage.setItem('userInfo', JSON.stringify(data));
    }
  } catch (error: any) {
    yield put(fetchProfileFailure(error.message));
  }
}

function* handleLogoutUser() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userInfo');
  localStorage.removeItem('isAuthenticated');
}

function* handlePwdEdit(action: ReturnType<typeof editProfilePasswordRequest>) {
  try {
    const response: ChangePwdResponse = yield call(
      serverApi.run,
      'profile/change-password',
      'POST',
      action.payload,
      true
    );
    if (!response.ok) {
      const error = response.data as IDataErrorResponse;
      yield put(setError({ message: error.errors[0].message, code: error.errors[0].extensions.code }));
      yield put(editProfilePasswordFailure(error.errors[0].message));
    } else {
      const data = response.data as ChangePasswordResult;
      console.log(data);
      if (data.success) {
        yield put(fetchProfileRequest());
      }
    }
  } catch (error: any) {
    yield put(setError(error.message));
  }
}

function* watchAuth() {
  yield takeLatest(authRequest.type, handleAuth);
}

function* watchFetchProfile() {
  yield takeLatest(fetchProfileRequest.type, handleFetchProfile);
}

function* watchLogoutUser() {
  yield takeLatest(logout.type, handleLogoutUser);
}

function* watchReg() {
  yield takeLatest(regRequest.type, handleReg);
}

function* watchEditPwd() {
  yield takeLatest(editProfilePasswordRequest.type, handlePwdEdit);
}

export default function* userSaga() {
  yield all([fork(watchAuth), fork(watchReg), fork(watchFetchProfile), fork(watchEditPwd), fork(watchLogoutUser)]);
}
