import {all} from 'redux-saga/effects';
import characterSagas from './Characters';

export default function* rootSaga(getState) {
  yield all([characterSagas()]);
}
