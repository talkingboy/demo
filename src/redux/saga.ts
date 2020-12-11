import { delay, put, takeEvery } from 'redux-saga/effects';
import { responseTest } from './actions';
import { TAction } from './tools';

function* requestTest(action: TAction<number>) {
  yield delay(2000);
  yield put(responseTest(2000 + action.payload));
}

export default function* testSaga() {
  yield takeEvery('REQUEST_TEST', requestTest);
}
