import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import promiseMiddleware from '../middlewares/promiseMiddleware'

import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']})
)(createStore);

export default function configureStore(initialState) {
  let store;

  if (process.env.NODE_ENV === 'development') {
    const persistState = require('redux-devtools').persistState;
    const DevTools = require('../containers/DevTools').default;

    const enhancer = compose(
      DevTools.instrument(),
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&#]+)\b/
        )
      )
    );
    store = createStoreWithMiddleware(reducer, initialState, enhancer);

    if (module.hot) {
      module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').default)
      );
    }
  }else{
    store = createStoreWithMiddleware(reducer, initialState);
  }

  return store;
}
