/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Card, CardBody, Table } from 'reactstrap';
import { FaFilePdf } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle';
import styles from './styles.scss';

const Agreements = () => {
  return (
    <div styleName="agreements-information-page">
      <SectionTitle size="2">Agreements</SectionTitle>
      <Card>
        <CardBody>
          <Table styleName="table">
            <tbody>
              <tr>
                <td>
                  <span styleName="description">
                    See concluded User Agreements.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" styleName="contract-link">
                    <FaFilePdf />
                    Agreement_7547145-18122018091439.pdf
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CssModules(Agreements, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
