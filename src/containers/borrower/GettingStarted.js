// Dependencies
import React from 'react';
import { Layout, Icon, Progress } from 'antd';

// Components

// styles
import './styles.css';
const { Content } = Layout;

export default class BorrowerGettingStarted extends React.Component {
  render() {
    return (
      <Content
        style={{
          margin: '16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        }}
      >
        <div className="account-setup-progress">
          <div className="account-setup-progress-indicator">
            <Progress type="circle" percent={10} />
            <div style={{ textAlign: 'center' }}>
              <span>Account setup progress</span>
            </div>
          </div>
          <div className="account-setup-progress-items">
            <table>
              <tbody>
                <tr>
                  <td width="33.3%" style={{ paddingBottom: '16px' }}>
                    <div>
                      <Icon
                        type="check-circle"
                        theme="twoTone"
                        twoToneColor="#52c41a"
                        style={{ fontSize: '32px', marginRight: '8px' }}
                      />
                      <span>Account creation</span>
                    </div>
                  </td>
                  <td width="33.3%" style={{ paddingBottom: '16px' }}>
                    <div>
                      <Icon
                        type="credit-card"
                        theme="outlined"
                        style={{ fontSize: '32px', marginRight: '8px' }}
                      />
                      <span>Add Bank Card</span>
                    </div>
                  </td>
                  <td width="33.3%" style={{ paddingBottom: '16px' }}>
                    <div>
                      <Icon
                        type="bank"
                        theme="outlined"
                        style={{ fontSize: '32px', marginRight: '8px' }}
                      />
                      <span>Add Bank Account</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="33.3%" style={{ paddingTop: '16px' }}>
                    <div>
                      <Icon
                        type="contacts"
                        theme="outlined"
                        style={{ fontSize: '32px', marginRight: '8px' }}
                      />
                      <span>Add Reference Details</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Content>
    );
  }
}
