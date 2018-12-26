import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const data = { title: 'client title', content: 'client content' };
ReactDOM.hydrate(
  <App data={data} />,
  document.getElementById('root'),
);
