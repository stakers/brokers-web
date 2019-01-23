import React from 'react';
import CssModules from 'react-css-modules';
import { FaBriefcase, FaPowerOff } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

function TopNav() {
  return (
    <header styleName="header-wrapper">
      <a href="#" styleName="header-logo" />
      <div>
        <span styleName="head-link-wrapper">
          Refer a friend and earn a bonus!
        </span>
        <ul styleName="nav-helper">
          <li>
            <a href="#" styleName="header-balance-link">
              ($0.00)
            </a>
          </li>
          <li>
            <a href="#" styleName="investor-username">
              John Doe
            </a>
          </li>
          <li>
            <NavLink to="/my-settings">
              <FaBriefcase />
            </NavLink>
          </li>
          <li>
            <a href="#">
              <FaPowerOff />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default CssModules(TopNav, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
