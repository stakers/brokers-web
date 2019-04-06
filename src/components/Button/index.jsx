/* eslint-disable no-console */
import React from 'react';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import styles from './styles.scss';

function ButtonCustom(props) {
  const { children } = props;
  return <Button {...props}>{children}</Button>;
}

export default CssModules(ButtonCustom, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ])
};
