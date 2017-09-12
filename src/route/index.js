import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Bundle from '@/route/bundle';
import Layout from '../views/Layout';
import Login from '../views/Login';
import Register from '../views/Register';

import Home from 'bundle-loader?lazy!../views/Home';
import Form from 'bundle-loader?lazy!../views/Form';
import Table from 'bundle-loader?lazy!../views/Table';
import Calendar from 'bundle-loader?lazy!../views/Calendar';
import Timeline from 'bundle-loader?lazy!../views/Timeline';
import Steps from 'bundle-loader?lazy!../views/Steps';
import Cards from 'bundle-loader?lazy!../views/Cards';
import Mailbox from 'bundle-loader?lazy!../views/Mailbox';
import Page2 from 'bundle-loader?lazy!../views/Page2';

export const childRoutes = [
  {
    'path':'/home',
    'component': (props) => (
      <Bundle load={Home}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
    'exactly': true
  },
  {
    'path':'/form',
    'component': (props) => (
      <Bundle load={Form}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  },
  {
    'path':'/table',
    'component': (props) => (
      <Bundle load={Table}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  },
  {
    'path':'/calendar',
    'component': (props) => (
      <Bundle load={Calendar}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  },
  {
    'path':'/timeline',
    'component': (props) => (
      <Bundle load={Timeline}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  },
  {
    'path':'/steps',
    'component': (props) => (
      <Bundle load={Steps}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  },
  {
    'path':'/cards',
    'component': (props) => (
      <Bundle load={Cards}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  },
  {
    'path':'/mailbox',
    'component': (props) => (
      <Bundle load={Mailbox}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  },
  {
    'path':'/page2',
    'component': (props) => (
      <Bundle load={Page2}>
        {(Comp) => <Comp {...props}/>}
      </Bundle>
    ),
  }
];

const routes = (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/" component={Layout}/>
  </Switch>
);

export default routes
