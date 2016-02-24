import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute,useRouterHistory} from 'react-router';
import {createHistory} from 'history'

import configureStore from './store/configureStore';

import App from './views/App/App';
import Home from './views/Home/Home';
import Login from './views/Login/Login';

const history = useRouterHistory(createHistory)({ basename: '' })
const store = configureStore();

const validate = function (next, replace, callback) {
  const isLoggedIn = !!store.getState().auth.loggingIn
  if (!isLoggedIn && next.location.pathname != '/login') {
    replace('/login')
  }
  callback()
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App} onEnter={validate}>
          <IndexRoute component={Home}/>
          <Route path="/login" component={Login}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
