import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import routes from './routes';
import './res/style/common.sass';

const store = createStore(reducers, applyMiddleware(ReduxThunk));
ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      { renderRoutes(routes) }
    </Router>
  </Provider>,
  document.getElementById('root'),
);
