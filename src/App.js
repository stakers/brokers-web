import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import BorrowerGettingStarted from './containers/borrower/GettingStarted';
import Loans from './containers/borrower/Loans';
import Messages from './containers/borrower/Messages';
import Pool from './containers/borrower/Pool';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <DashboardLayout>
            <Switch>
              <Redirect from="/borrower/gettingStarted" to="/" />
              <Route exact path="/" component={BorrowerGettingStarted} />
              <Route path="/borrower/loans" component={Loans} />
              <Route path="/borrower/messages" component={Messages} />
              <Route path="/borrower/pool" component={Pool} />
            </Switch>
          </DashboardLayout>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
