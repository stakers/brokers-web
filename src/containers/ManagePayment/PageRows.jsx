import React from 'react';
import { Table } from 'reactstrap';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PageRows = props => {
  const { toggleShowAccounts, toggleShowCards } = props;
  return (
    <Table styleName="table">
      <tbody>
        <tr>
          <td>
            <span styleName="title">Debit Card</span>
            <span styleName="description">
              To protect your account, a security code is required in addition
              to your password
            </span>
          </td>
          <td styleName="data" colSpan="2">
            2/5 cards added
          </td>
          <td styleName="setting-action">
            <a
              href="#"
              onClick={() => {
                toggleShowCards();
              }}
            >
              View cards
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <span styleName="title">Bank Transfer</span>
            <span styleName="description">
              Choose a unique password for your account.
            </span>
          </td>
          <td styleName="data" colSpan="2">
            1/5 accounts added
          </td>
          <td styleName="setting-action">
            <a
              href="#"
              onClick={() => {
                toggleShowAccounts();
              }}
            >
              View accounts
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CssModules(PageRows, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});

PageRows.propTypes = {
  toggleShowAccounts: PropTypes.func,
  toggleShowCards: PropTypes.func
};
