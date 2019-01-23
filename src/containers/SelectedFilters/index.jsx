import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import { IoIosClose } from 'react-icons/io';
import styles from './styles.scss';

class SelectedFilters extends Component {
  render() {
    const { selectedChoices, removeChoice } = this.props;
    return (
      <div styleName="selected-filters">
        <p styleName="title">Selected Filters</p>
        <ul styleName="filter-tag-container">
          {selectedChoices.map((filter, fid) => (
            <li key={fid} styleName="filter-tag">
              <span>{filter.toUpperCase()}</span>
              <IoIosClose
                size={16}
                onClick={() => {
                  removeChoice(filter);
                }}
              />
            </li>
          ))}
        </ul>
        <div styleName="cancel-all-filters">
          <span>Cancel all filters</span>
        </div>
      </div>
    );
  }
}

SelectedFilters.propTypes = {
  selectedChoices: PropTypes.array,
  removeChoice: PropTypes.func
};

export default CssModules(SelectedFilters, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
