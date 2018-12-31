import path from 'path';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import exampleDataAPI from './api/example-data-api';
import reducers from './reducers';
import renderHTML from './render-html';
import App from './components/App';

const server = express();
const httpPort = process.env.NODE_ENV === 'production' ? 80 : 3000;
const distPath = path.resolve(__dirname, '..', 'dist');
const store = createStore(reducers, applyMiddleware(ReduxThunk));

/* logging */
server.use(logger(
  process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

/* server main logic */
server.use(express.static(distPath));
server.get('/example-data', exampleDataAPI);
server.use('/', (() => {
  const component = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  return renderHTML(component);
})()); // TODO(3jin): Find a better way than using immediately-invoked functions

/* error handling */
server.use((req, res, next) => {
  next(createError(404));
});
server.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.renderHTML('error');
});

server.listen(httpPort, () => {
  console.log(`Express app is listening on port ${httpPort}`);
});

export default server;
