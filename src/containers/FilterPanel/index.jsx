/* eslint-disable  import/no-unresolved */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter';

export default class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: props.opened
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { collapse } = this.state;
    return <Filter toggle={this.toggle} collapse={collapse} {...this.props} />;
  }
}

FilterPanel.propTypes = {
  opened: PropTypes.bool
};
