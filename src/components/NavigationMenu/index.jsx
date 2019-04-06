import React from 'react';
import CssModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

function NavigationMenu() {
  return (
    <nav styleName="navigation-links">
      <ul>
        <li>
          <NavLink
            to="/overview"
            activeStyle={{ background: 'rgb(69, 43, 109)', opacity: '1' }}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/loan-listings"
            activeStyle={{ background: 'rgb(69, 43, 109)', opacity: '1' }}
          >
            Loan Listings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auto-invest"
            activeStyle={{ background: 'rgb(69, 43, 109)', opacity: '1' }}
          >
            Auto Invest
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account-statement"
            activeStyle={{ background: 'rgb(69, 43, 109)', opacity: '1' }}
          >
            Account Statement
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-investment"
            activeStyle={{ background: 'rgb(69, 43, 109)', opacity: '1' }}
          >
            My Investment
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            activeStyle={{ background: 'rgb(69, 43, 109)', opacity: '1' }}
          >
            Deposit / Withdraw / FX
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default CssModules(NavigationMenu, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
