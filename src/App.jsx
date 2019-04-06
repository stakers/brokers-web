/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/dashboard" from="/" />
          </Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  children: PropTypes.element
};

export default hot(module)(App);
