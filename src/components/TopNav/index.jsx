import React from 'react';
import CssModules from 'react-css-modules';
import { FaBriefcase, FaPowerOff, FaCaretDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Popover from 'react-awesome-popover';
import 'react-awesome-popover/dest/react-awesome-popover.css';
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
            <Popover
              action="click"
              placement="bottom"
              contentClass="popover-content"
            >
              <a href="#" styleName="pt-button investor-username" role="button">
                John Doe
                <FaCaretDown color="#78c8c7" />
              </a>
              <div styleName="rap-popover-content">
                <ul>
                  <li>
                    <NavLink to="/my-settings">My Account</NavLink>
                  </li>
                  <li>
                    <NavLink to="/campaigns">Campaigns</NavLink>
                  </li>
                </ul>
              </div>
            </Popover>
          </li>
          <li>
            <FaBriefcase />
          </li>
          <li>
            <NavLink to="/login">
              <FaPowerOff />
            </NavLink>
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
