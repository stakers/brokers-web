/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import Button from '../../components/Button'
import styles from './styles.scss';

const Cards = props => {
  const { toggleShowCards, toggleAddCardModal } = props;
  return (
    <div>
      <div styleName="action-menu">
        <FaArrowLeft
          styleName="back-link"
          onClick={() => {
            toggleShowCards();
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
          onClick={() => {
            toggleAddCardModal();
          }}
        >
          <FaPlus color="#fff" size="11" style={{ marginRight: '4px' }} />
          New card
        </Button>
      </div>
      <Table styleName="table">
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Expiry Date</th>
            <th>Date Added</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5377******</td>
            <td>7547145</td>
            <td>12/12/2018</td>
            <td>
              <a href="#">Edit</a>
            </td>
          </tr>
          <tr>
            <td>5377******</td>
            <td>7547145</td>
            <td>12/12/2018</td>
            <td>
              <a href="#">Edit</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CssModules(Cards, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});

Cards.propTypes = {
  toggleShowCards: PropTypes.func,
  toggleAddCardModal: PropTypes.func
};
