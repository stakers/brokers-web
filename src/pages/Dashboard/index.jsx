/* eslint-disable  import/no-unresolved*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components and Containers
import Navigation from '../../containers/Navigation';

// Pages
import OverviewPage from '../OverviewPage';
import LoanListings from '../LoanListings';
import AutoInvest from '../AutoInvest';
import AccountStatement from '../AccountStatement';
import MyInvestment from '../MyInvestment';
import DepositWithdrawFx from '../DepositWithdrawFx';
import AccountSettings from '../AccountSettings';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/dashboard/overview" component={OverviewPage} />
        <Route path="/dashboard/loan-listings" component={LoanListings} />
        <Route path="/dashboard/auto-invest" component={AutoInvest} />
        <Route
          path="/dashboard/account-statement"
          component={AccountStatement}
        />
        <Route path="/dashboard/my-investment" component={MyInvestment} />
        <Route path="/dashboard/transactions" component={DepositWithdrawFx} />
        <Route path="/dashboard/my-settings" component={AccountSettings} />
        <Redirect to="/dashboard/overview" from="/dashboard" />
      </Switch>
    </React.Fragment>
  );
};

export default Dashboard;
