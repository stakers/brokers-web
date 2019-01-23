import React from 'react';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import styles from './styles.scss';

const ChoiceItem = props => {
  const { title, choice, selectFilter, selectedChoices } = props;

  if (selectedChoices.indexOf(choice) > -1) {
    return null;
  } else {
    return (
      <li styleName="choice-item">
        <input
          type="checkbox"
          styleName="styled-checkbox"
          name={title}
          id={`${title}-${choice}`}
          onChange={() => {
            selectFilter(choice);
          }}
        />
        <label htmlFor={`${title}-${choice}`}>{choice.toUpperCase()}</label>
      </li>
    );
  }
};

export default CssModules(ChoiceItem, styles, { allowMultiple: true });

ChoiceItem.propTypes = {
  title: PropTypes.string,
  choice: PropTypes.string,
  selectFilter: PropTypes.func,
  selectedChoices: PropTypes.array
};
