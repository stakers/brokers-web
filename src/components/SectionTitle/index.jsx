import React from 'react';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import styles from './styles.scss';

function SectionTitle(props) {
  const Size = `h${props.size}`;
  return <Size>{props.children}</Size>;
}

export default CssModules(SectionTitle, styles, { allowMultiple: true });

SectionTitle.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string
};
