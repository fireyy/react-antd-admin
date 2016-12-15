import React, { Component } from 'react';
import { Route, IndexRedirect } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import App from '../views/App';
import Home from '../views/Home';
import Login from '../views/Login';
import Page2 from '../views/Page2';

import {getCookie} from '../utils';

const validate = function (next, replace, callback) {
  const isLoggedIn = !!getCookie('uid')
  if (!isLoggedIn && next.location.pathname != '/login') {
    replace('/login')
  }
  callback()
}

const routes = (
  <Route path="/" onEnter={validate}>
    <IndexRedirect to="home" />
    <Route component={App}>
      <Route path="home" component={Home}/>
      <Route path="page2" component={Page2}/>
    </Route>
    <Route path="login" component={Login}/>
  </Route>
);

export default routes