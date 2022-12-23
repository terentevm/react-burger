import thunk from 'redux-thunk';
import { composeWithDevTools } from  'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer, RootState } from './reducers';

  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );

  export default store;
