/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Row, Col } from 'reactstrap';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import PersonalInformation from '../../containers/PersonalInformation';
import Security from '../../containers/Security';
import Currencies from '../../containers/Currencies';
import Agreements from '../../containers/Agreements';
import TaxReport from '../../containers/TaxReport';
import ManagePayment from '../../containers/ManagePayment';
import styles from './styles.scss';
import NotificationSettings from '../../containers/NotificationSettings';

const AccountSettings = () => {
  return (
    <div styleName="content">
      <SectionTitle size="1">My Account</SectionTitle>
      <div styleName="content-body">
        <Row>
          <Col md={{ size: 2 }} styleName="tab-navigation-container">
            <nav styleName="nav-items">
              <ul>
                <li styleName="nav-item">
                  <NavLink
                    to="/my-settings/personal-information"
                    activeStyle={{ color: '#3f85f4', opacity: '1' }}
                  >
                    Personal Information
                  </NavLink>
                </li>
                <li styleName="nav-item">
                  <NavLink
                    to="/my-settings/security"
                    activeStyle={{ color: '#3f85f4', opacity: '1' }}
                  >
                    Security
                  </NavLink>
                </li>
                <li styleName="nav-item">
                  <NavLink
                    to="/my-settings/currencies"
                    activeStyle={{ color: '#3f85f4', opacity: '1' }}
                  >
                    Currencies
                  </NavLink>
                </li>
                <li styleName="nav-item">
                  <NavLink
                    to="/my-settings/notifications"
                    activeStyle={{ color: '#3f85f4', opacity: '1' }}
                  >
                    Notifications
                  </NavLink>
                </li>
                <li styleName="nav-item">
                  <NavLink
                    to="/my-settings/agreements"
                    activeStyle={{ color: '#3f85f4', opacity: '1' }}
                  >
                    Agreements
                  </NavLink>
                </li>
                <li styleName="nav-item">
                  <NavLink
                    to="/my-settings/tax-report"
                    activeStyle={{ color: '#3f85f4', opacity: '1' }}
                  >
                    Tax Report
                  </NavLink>
                </li>
                <li styleName="nav-item">
                  <NavLink
                    to="/my-settings/manage-payment"
                    activeStyle={{ color: '#3f85f4', opacity: '1' }}
                  >
                    Manage Payment
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Col>
          <Col>
            <Switch>
              <Route
                path="/my-settings/personal-information"
                component={PersonalInformation}
              />
              <Route path="/my-settings/security" component={Security} />
              <Route path="/my-settings/currencies" component={Currencies} />
              <Route
                path="/my-settings/notifications"
                component={NotificationSettings}
              />
              <Route path="/my-settings/agreements" component={Agreements} />
              <Route path="/my-settings/tax-report" component={TaxReport} />
              <Route
                path="/my-settings/manage-payment"
                component={ManagePayment}
              />
              <Redirect
                from="/my-settings"
                to="/my-settings/personal-information"
              />
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CssModules(AccountSettings, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
