import React, { Component } from 'react';
import { Provider } from 'react-redux';
import route from '../route';
import { Router, hashHistory } from 'react-router';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    if (!this.route) this.route = route;
    return (
      <Provider store={store}>
        <Router routes={this.route} history={hashHistory} />
      </Provider>
    );
  }
}
