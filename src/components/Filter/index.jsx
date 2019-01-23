/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Collapse, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import styles from './styles.scss';
import Choiceitem from '../Choiceitem';

const Filter = props => {
  const {
    collapse,
    title,
    choices,
    gutter,
    selectFilter,
    selectedChoices
  } = props;

  return (
    <div styleName="panel" style={{ marginBottom: gutter }}>
      <div
        styleName="collapse-trigger"
        onClick={() => {
          props.toggle();
        }}
        style={{ borderBottomWidth: collapse ? 0 : '1px' }}
      >
        <span styleName="panel-title">{title}</span>
        {collapse ? (
          <FaCaretDown color="#78c8c7" />
        ) : (
          <FaCaretUp color="#78c8c7" />
        )}
      </div>
      <Collapse isOpen={collapse}>
        <Card styleName="card">
          <CardBody styleName="card-body">
            <span styleName="action">Select/Clear All</span>
            <ul styleName="choices">
              {choices.map((choice, cid) => (
                <Choiceitem
                  key={cid}
                  choice={choice}
                  selectFilter={selectFilter}
                  title={title}
                  selectedChoices={selectedChoices}
                />
              ))}
            </ul>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default CssModules(Filter, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});

Filter.propTypes = {
  collapse: PropTypes.bool,
  toggle: PropTypes.func,
  title: PropTypes.string,
  gutter: PropTypes.string,
  choices: PropTypes.array,
  selectFilter: PropTypes.func,
  removedChoice: PropTypes.string,
  selectedChoices: PropTypes.array
};
