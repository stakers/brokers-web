// Dependencies
import React from 'react';
import { Layout, Icon } from 'antd';

// Components
import BorrowerDashboardHeader from '../../components/BorrowerDashboardHeader';

// styles
import './styles.css';
const { Content } = Layout;

export default class Messages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BorrowerDashboardHeader
          title="Messages"
          headerIcon={
            <Icon
              type="mail"
              theme="twoTone"
              style={{
                fontSize: '42px',
                marginRight: '24px',
                verticalAlign: 'middle'
              }}
              twoToneColor="rgb(0, 172, 104)"
            />
          }
          showActionButtons={false}
        />
        <Content
          style={{
            margin: '16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          <div className="intro-container">
            <Icon
              type="mail"
              theme="twoTone"
              style={{
                fontSize: '64px',
                verticalAlign: 'middle',
                fontWeight: 100
              }}
              twoToneColor="rgb(0, 172, 104)"
            />
            <h3 className="intro-container-title">No messages</h3>
            <p className="intro-container-desc">
              All your messages will be listed here.
            </p>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}
