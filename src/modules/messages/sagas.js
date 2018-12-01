import {
  call, put, takeEvery, all,
} from 'redux-saga/effects';
import {
  fetchMessages,
} from './actions';
import {
  fetchMessages as fetch,
} from './api';


function* fetchMessagesSaga({ payload }) {
  try {
    const { data } = yield call(fetch(payload));
    yield put(fetchMessages.success(data));
  } catch (e) {
    yield put(fetchMessages.failure());
  }
}

function* rootMessagesSaga() {
  yield all([
    takeEvery([fetchMessages.request], fetchMessagesSaga),
  ]);
}

export default rootMessagesSaga;
