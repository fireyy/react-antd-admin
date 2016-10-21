import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import configureStore from './store/configureStore';

import App from './views/App';
import Home from './views/Home';
import Login from './views/Login';
import Page2 from './views/Page2';

import {getCookie} from './utils';

const store = configureStore();

const validate = function (next, replace, callback) {
  const isLoggedIn = !!getCookie('uid')
  if (!isLoggedIn && next.location.pathname != '/login') {
    replace('/login')
  }
  callback()
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" onEnter={validate}>
          <IndexRedirect to="home" />
          <Route component={App}>
            <Route path="home" component={Home}/>
            <Route path="page2" component={Page2}/>
          </Route>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
