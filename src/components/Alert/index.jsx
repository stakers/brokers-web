/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { UncontrolledAlert } from 'reactstrap';
import styles from './styles.scss';

import Button from '../Button';

function Alert(props) {
  return (
    <div styleName="notification-area">
      <UncontrolledAlert
        color={`${props.color}`}
        styleName="notification-card-red"
      >
        <div>
          <p>
            The system was unable to verify your identity. Please make sure
            that:
          </p>
          <ul>
            <li>The document is valid (dates, name, etc)</li>
            <li>
              The document is readable and matches the user name on your Mintos
              account;
            </li>
            <li>
              The person on the portrait photo corresponds to the person on the
              document photo;
            </li>
            <li>Uploaded photos are not dark and are free of glare;</li>
            <li>Date of birth and document ID are clearly visible.</li>
          </ul>
        </div>
        <Button type="btn-primary" size="btn-sm">
          Please try again
        </Button>
      </UncontrolledAlert>
    </div>
  );
}

export default CssModules(Alert, styles, { allowMultiple: true });

Alert.propTypes = {
  color: PropTypes.string
};

Alert.defaultProps = {
  color: 'danger'
};
