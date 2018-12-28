import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import renderHTML from './renderHTML';
import App from './components/App';

const router = express.Router();
const store = createStore(reducers);

router.get('/', () => {
  const component = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  return renderHTML(component);
});

export default router;
