import { fork } from 'redux-saga/effects';
import itemsSaga from './messages/sagas';
import userSaga from './user/sagas';


export default function* rootSaga() {
  yield [
    fork(itemsSaga),
    fork(userSaga),
  ];
}
