/* eslint-disable no-console */
import React from 'react';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { FaShieldAlt } from 'react-icons/fa';
import styles from './styles.scss';

function InvestButton(props) {
  return (
    <button styleName={`btn ${props.size}`}>
      <FaShieldAlt color="#f9c400" size="12px" style={{ marginRight: '4px' }} />
      {props.children}
    </button>
  );
}

export default CssModules(InvestButton, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});

InvestButton.propTypes = {
  size: PropTypes.string,
  children: PropTypes.element
};

InvestButton.defaultProps = {
  size: 'btn-sm'
};
