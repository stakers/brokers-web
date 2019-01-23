/* eslint-disable  import/no-unresolved */

import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import SectionTitle from '../../components/SectionTitle';
import FeedLink from '../../components/FeedLink';

function NewsFeed(props) {
  const data = props.data;
  return (
    <Card body>
      <CardTitle>
        <SectionTitle size="3">Recent News</SectionTitle>
      </CardTitle>
      <table styleName="news-feed-inner">
        <tbody>
          {data.map((el, i) => (
            <FeedLink key={i} date={el.date} link={el.link} />
          ))}
        </tbody>
      </table>
      <a href="#" styleName="all-news">All News</a>
    </Card>
  );
}

export default CssModules(NewsFeed, styles, { allowMultiple: true });

NewsFeed.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    link: PropTypes.string
  })
};
