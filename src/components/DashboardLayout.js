// Dependencies
import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Dropdown from 'antd/lib/dropdown';
import { Link } from 'react-router-dom';

import './styles.css';
const { Header } = Layout;

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
);

const PandaIcon = props => <Icon component={PandaSvg} {...props} />;

const menu = (
  <Menu>
    <Menu.Item>
      <span style={{ marginBottom: 8 }}>
        <Icon type="user" style={{ marginRight: 8 }} />
        Account settings
      </span>
    </Menu.Item>
    <Menu.Item>
      <span>
        <Icon type="logout" style={{ marginRight: 8 }} />
        Logout
      </span>
    </Menu.Item>
  </Menu>
);
const languageMenu = (
  <Menu>
    <Menu.Item>
      <span style={{ marginBottom: 8 }}>English</span>
    </Menu.Item>
    <Menu.Item>
      <span>Portuguese</span>
    </Menu.Item>
  </Menu>
);

export default props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header
          style={{
            width: '100%',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div className="dashboard-header-index-left">
            {/* <div className="logo" /> */}
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/borrower/gettingStarted">
                  <Icon type="rocket" theme="outlined" />
                  <span>Get started</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/borrower/loans">
                  <Icon type="exception" theme="outlined" />
                  <span>Loan requests</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/borrower/pool">
                  <Icon type="cluster" theme="outlined" />
                  <span>Loan from pool</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/borrower/messages">
                  <Icon type="mail" theme="outlined" />
                  <span>Messages</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="dashboard-header-index-right">
            <Link to="/help">
              <span className="dashboard-header-index-action">
                <Icon
                  type="question-circle"
                  theme="outlined"
                  style={{
                    fontSize: '16px',
                    color: 'hsla(0,0%,100%,.65)'
                  }}
                />
              </span>
            </Link>
            <Link to="/help">
              <span className="dashboard-header-index-action">
                <Icon
                  type="notification"
                  theme="outlined"
                  style={{
                    fontSize: '16px',
                    color: 'hsla(0,0%,100%,.65)'
                  }}
                />
              </span>
            </Link>
            <Dropdown overlay={menu} className="dashboard-header-index-action">
              <span>
                <span>
                  <PandaIcon
                    style={{
                      fontSize: '24px',
                      marginRight: '8px',
                      verticalAlign: 'middle'
                    }}
                  />
                  <span className="text">John Hancock</span>
                  <Icon
                    type="down"
                    style={{
                      fontSize: '12px',
                      color: 'hsla(0,0%,100%,.65)',
                      marginLeft: '8px',
                      verticalAlign: 'middle'
                    }}
                  />
                </span>
              </span>
            </Dropdown>
            <Dropdown
              overlay={languageMenu}
              className="dashboard-header-index-action"
            >
              <span className="dashboard-header-index-action">
                <Icon
                  type="global"
                  theme="outlined"
                  style={{
                    fontSize: '16px',
                    color: 'hsla(0,0%,100%,.65)',
                    marginRight: '8px',
                    verticalAlign: 'middle'
                  }}
                />
                <span className="text">Languages</span>
                <Icon
                  type="down"
                  style={{
                    fontSize: '12px',
                    color: 'hsla(0,0%,100%,.65)',
                    marginLeft: '8px',
                    verticalAlign: 'middle'
                  }}
                />
              </span>
            </Dropdown>
          </div>
        </Header>
        {props.children}
      </Layout>
    </Layout>
  );
};
