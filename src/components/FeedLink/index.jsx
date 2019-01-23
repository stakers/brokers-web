import React from 'react';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function FeedLink(props) {
  return (
    <tr>
      <td>{props.date}</td>
      <td styleName="news-link">
        <a href="#">{props.link}</a>
      </td>
    </tr>
  );
}

export default CssModules(FeedLink, styles, { allowMultiple: true });

FeedLink.propTypes = {
  date: PropTypes.string,
  link: PropTypes.string
};
