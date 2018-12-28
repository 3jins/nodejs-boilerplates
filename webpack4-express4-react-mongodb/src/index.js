import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers);
const data = { title: 'client title', content: 'client content' };
ReactDOM.hydrate(
  <Provider store={store}>
    <App data={data} />
  </Provider>,
  document.getElementById('root'),
);
