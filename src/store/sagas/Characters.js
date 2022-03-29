import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {
  Types as CharactersTypes,
  Creators as CharactersActions,
} from '../ducks/Characters';
import api from '../../utils/api';

function* getCharacters({payload}) {
  try {
    const {data, status} = yield call(api.get, '/character', payload);
    if (status === 200) {
      yield put(CharactersActions.GetCharacterSuccess(data));
    } else {
      yield put(CharactersActions.GetCharacterFailure());
    }
  } catch (err) {
    console.log(err);
    yield put(CharactersActions.GetCharacterFailure());
  }
}

function* addCharacters({payload}) {
  try {
    const {data, status} = yield call(api.get, '/character', payload);
    if (status === 200) {
      yield put(CharactersActions.AddCharacterSuccess(data));
    } else {
      yield put(CharactersActions.AddCharacterFailure());
    }
  } catch (err) {
    console.log(err);
    yield put(CharactersActions.AddCharacterFailure());
  }
}

function* getByIdCharacter({payload}) {
  try {
    const {data, status} = yield call(api.get, `/character/${payload}`);
    if (status === 200) {
      yield put(CharactersActions.GetByIdCharacterSuccess(data));
    } else {
      yield put(CharactersActions.GetByIdCharacterFailure());
    }
  } catch (err) {
    console.log(err);
    yield put(CharactersActions.GetByIdCharacterFailure());
  }
}

function* getCharactersWatcher() {
  yield takeLatest(CharactersTypes.GET_CHARACTERS_REQUEST, getCharacters);
}

function* addCharactersWatcher() {
  yield takeLatest(CharactersTypes.ADD_CHARACTERS_REQUEST, addCharacters);
}

function* getByIdCharacterWatcher() {
  yield takeLatest(
    CharactersTypes.GET_BY_ID_CHARACTER_REQUEST,
    getByIdCharacter,
  );
}

export default function* rootSaga() {
  yield all([
    fork(getCharactersWatcher),
    fork(addCharactersWatcher),
    fork(getByIdCharacterWatcher),
  ]);
}
