import thunk from 'redux-thunk';
import { composeWithDevTools } from  'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducers';

export const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
