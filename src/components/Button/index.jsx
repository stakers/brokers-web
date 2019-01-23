/* eslint-disable no-console */
import React from 'react';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Button(props) {
  return (
    <button styleName={`btn ${props.type} ${props.size}`}>
      {props.children}
    </button>
  );
}

export default CssModules(Button, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.element
};

Button.defaultProps = {
  type: 'btn-primary',
  size: 'btn-sm'
};
