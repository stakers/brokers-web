/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components and Containers
import Navigation from './containers/Navigation';

// Pages
import OverviewPage from './pages/OverviewPage';
import LoanListings from './pages/LoanListings';
import AutoInvest from './pages/AutoInvest';
import AccountStatement from './pages/AccountStatement';
import MyInvestment from './pages/MyInvestment';
import DepositWithdrawFx from './pages/DepositWithdrawFx';
import AccountSettings from './pages/AccountSettings';

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
            <Navigation />
            <Switch>
              <Route path="/overview" component={OverviewPage} />
              <Route path="/loan-listings" component={LoanListings} />
              <Route path="/auto-invest" component={AutoInvest} />
              <Route path="/account-statement" component={AccountStatement} />
              <Route path="/my-investment" component={MyInvestment} />
              <Route path="/transactions" component={DepositWithdrawFx} />
              <Route path="/my-settings" component={AccountSettings} />
              <Redirect to="/overview" from="/" />
            </Switch>
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
