import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from '../constants';
import * as userActions from '../actions/userActions';
import * as diaryActions from '../actions/diaryActions';

function* fetchUser() {
  const response = yield call(axios.get, '/api/user');
  yield put(userActions.receiveUser(response.data));
};

function* watchFetchUser() {
  yield takeEvery(constants.FETCH_USER, fetchUser);
};

function* getDiary() {
  const response = yield call(axios.get, '/api/diary');
  yield put(diaryActions.receiveDiary(response.data));
};

function* watchGetDiary() {
  yield takeEvery(constants.GET_DIARY, getDiary);
}

export default function* rootSaga(): any {
  yield all([fork(watchFetchUser), fork(watchGetDiary)]);
};