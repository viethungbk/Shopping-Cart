import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import appReducers from './reducers/index';
import './index.css';
import MyRoute from './MyRoute';
import * as serviceWorker from './serviceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
      <MyRoute />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();