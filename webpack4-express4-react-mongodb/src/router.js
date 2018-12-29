import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import renderHTML from './renderHTML';
import App from './components/App';

const router = express.Router();
const store = createStore(reducers, applyMiddleware(ReduxThunk));

// TODO(3jin): Find a better way than using immediately-invoked functions
router.get('/', (() => {
  const component = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  return renderHTML(component);
})());

export default router;
