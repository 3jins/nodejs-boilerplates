import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import NoMatch from './components/NoMatch';
import './res/style/common.sass';

const store = createStore(reducers, applyMiddleware(ReduxThunk));
ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/*" component={NoMatch} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
