/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import Button from '../../components/Button';
import styles from './styles.scss';

const Accounts = props => {
  const { toggleShowAccounts, toggleAddAccountModal } = props;
  return (
    <div>
      <div styleName="action-menu">
        <FaArrowLeft
          styleName="back-link"
          onClick={() => {
            toggleShowAccounts();
          }}
        />
        <Button
          color="success"
          size="sm"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '500'
          }}
          onClick={() => toggleAddAccountModal()}
        >
          <FaPlus color="#fff" size="11" style={{ marginRight: '4px' }} />
          New account
        </Button>
      </div>
      <Table styleName="table">
        <thead>
          <tr>
            <th>Account name</th>
            <th>Account number</th>
            <th>Bank name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>David Kalu</td>
            <td>3045687732</td>
            <td>First Bank</td>
            <td>
              <a href="#">Edit</a>
            </td>
          </tr>
          <tr>
            <td>John Hancock</td>
            <td>33829482948</td>
            <td>Ecobank</td>
            <td>
              <a href="#">Edit</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CssModules(Accounts, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});

Accounts.propTypes = {
  toggleShowAccounts: PropTypes.func,
  toggleAddAccountModal: PropTypes.func
};
