import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducers from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
