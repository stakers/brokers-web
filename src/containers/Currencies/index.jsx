/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Card, CardBody, Table } from 'reactstrap';
import SectionTitle from '../../components/SectionTitle';
import styles from './styles.scss';

const Currencies = () => {
  return (
    <div styleName="currencies-information-page">
      <SectionTitle size="2">Currencies</SectionTitle>
      <Card>
        <CardBody>
          <Table styleName="table">
            <tbody>
              <tr>
                <td>
                  <span styleName="description">
                    Select currencies you would like to see in the account
                    summary at the top of the page.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span styleName="choice">
                    <input
                      type="checkbox"
                      styleName="styled-checkbox"
                      name="currencies"
                      id="currencies"
                      defaultChecked
                    />
                    <label htmlFor="currencies">EUR 0.00</label>
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

export default CssModules(Currencies, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
