/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Card, CardBody, Table } from 'reactstrap';
import { FaInfoCircle } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle';
import styles from './styles.scss';

const NotificationSettings = () => {
  return (
    <div styleName="notifications-information-page">
      <SectionTitle size="2">Notifications</SectionTitle>
      <Card>
        <CardBody>
          <Table styleName="table">
            <tbody>
              <tr>
                <td>
                  <span styleName="description">
                    This is your notification setting centre. You can update
                    your notification settings in the below sections.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="choice">
                    <input
                      type="checkbox"
                      styleName="styled-checkbox"
                      name="daily-summary"
                      id="daily-summary"
                      defaultChecked
                    />
                    <label htmlFor="daily-summary">Daily summary</label>
                    <FaInfoCircle
                      color="#d1d3d4"
                      size="12"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="choice">
                    <input
                      type="checkbox"
                      styleName="styled-checkbox"
                      name="deposits"
                      id="deposits"
                      defaultChecked
                    />
                    <label htmlFor="deposits">Deposits</label>
                    <FaInfoCircle
                      color="#d1d3d4"
                      size="12"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="choice">
                    <input
                      type="checkbox"
                      styleName="styled-checkbox"
                      name="successful-withdrawal"
                      id="successful-withdrawal"
                      defaultChecked
                    />
                    <label htmlFor="successful-withdrawal">
                      Successful Withdrawal
                    </label>
                    <FaInfoCircle
                      color="#d1d3d4"
                      size="12"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="choice">
                    <input
                      type="checkbox"
                      styleName="styled-checkbox"
                      name="bonus-payments"
                      id="bonus-payments"
                    />
                    <label htmlFor="bonus-payments">Bonus Payments</label>
                    <FaInfoCircle
                      color="#d1d3d4"
                      size="12"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="choice">
                    <input
                      type="checkbox"
                      styleName="styled-checkbox"
                      name="successful-withdrawal"
                      id="successful-withdrawal"
                    />
                    <label htmlFor="successful-withdrawal">
                      Successful Withdrawal
                    </label>
                    <FaInfoCircle
                      color="#d1d3d4"
                      size="12"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="choice">
                    <input
                      type="checkbox"
                      styleName="styled-checkbox"
                      name="newsletters"
                      id="newsletters"
                    />
                    <label htmlFor="newsletters">Newsletters</label>
                    <FaInfoCircle
                      color="#d1d3d4"
                      size="12"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CssModules(NotificationSettings, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
