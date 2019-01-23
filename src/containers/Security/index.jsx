/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Card, CardBody, Table } from 'reactstrap';
import SectionTitle from '../../components/SectionTitle';
import styles from './styles.scss';

const Security = () => {
  return (
    <div styleName="security-information-page">
      <SectionTitle size="2">Security</SectionTitle>
      <Card>
        <CardBody>
          <Table styleName="table">
            <tbody>
              <tr>
                <td>
                  <span styleName="title">Two-factor authentication</span>
                </td>
                <td styleName="data" colSpan="2">
                  OFF
                </td>
                <td styleName="setting-action">
                  <a href="#">Enable</a>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="title">Change password</span>
                </td>
                <td styleName="data" colSpan="2">
                  *******
                </td>
                <td styleName="setting-action">
                  <a href="#">Change password</a>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CssModules(Security, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
