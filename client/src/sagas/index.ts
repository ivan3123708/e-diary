import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from '../constants';
import * as userActions from '../actions/userActions';

function* fetchUser() {
  const response = yield call(axios.get, '/api/user');
  yield put(userActions.receiveUser(response.data));
};

function* watchFetchUser() {
  yield takeEvery(constants.FETCH_USER, fetchUser);
};

export default function* rootSaga(): any {
  yield all([fork(watchFetchUser)]);
};