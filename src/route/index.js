import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../views/Layout';
import Login from '../views/Login';
import Register from '../views/Register';

import Home from '@/views/Home';
import Form from '@/views/Form';
import Table from '@/views/Table';
import Calendar from '@/views/Calendar';
import Timeline from '@/views/Timeline';
import Steps from '@/views/Steps';
import Cards from '@/views/Cards';
import Mailbox from '@/views/Mailbox';
import Page2 from '@/views/Page2';

export const childRoutes = [
  {
    'path':'/home',
    'component': Home,
    'exactly': true
  },
  {
    'path':'/form',
    'component': Form
  },
  {
    'path':'/table',
    'component': Table
  },
  {
    'path':'/calendar',
    'component': Calendar
  },
  {
    'path':'/timeline',
    'component': Timeline
  },
  {
    'path':'/steps',
    'component': Steps
  },
  {
    'path':'/cards',
    'component': Cards
  },
  {
    'path':'/mailbox',
    'component': Mailbox
  },
  {
    'path':'/page2',
    'component': Page2
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
