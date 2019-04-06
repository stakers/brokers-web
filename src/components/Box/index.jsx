/* eslint-disable  import/no-unresolved */
/* eslint-disable no-console */
import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import CssModules from 'react-css-modules';
import styles from './styles.scss';

import Button from '../Button';
import SectionTitle from '../SectionTitle';

function Box(props) {
  const data = props.data;
  return (
    <Card body styleName="card-body">
      <div>
        <CardTitle styleName="card-header">
          <SectionTitle size={5}>{props.title}</SectionTitle>
          <span styleName="value">{props.value}</span>
        </CardTitle>
        <table styleName="data">
          <tbody>
            {data.map((el, i) => (
              <tr key={i}>
                <td>{el.key}</td>
                <td>{el.value}</td>
              </tr>
            ))}
            <tr styleName="em">
              <td>Total</td>
              <td>$ 0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      {props.btnText ? (
        <Button color="primary" size="lg">
          {props.btnText}
        </Button>
      ) : null}

      {props.children ? props.children : null}
    </Card>
  );
}

export default CssModules(Box, styles, { allowMultiple: true });

Box.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  btnText: PropTypes.string,
  data: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string
  }),
  children: PropTypes.element
};
