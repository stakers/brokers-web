/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import {
  Card,
  CardBody,
  Table,
  Form,
  Label,
  Input,
  FormGroup
} from 'reactstrap';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import styles from './styles.scss';

const TaxReports = () => {
  return (
    <div styleName="tax-report-information-page">
      <SectionTitle size="2">Tax Report</SectionTitle>
      <Card>
        <CardBody>
          <Form>
            <Table styleName="table">
              <tbody>
                <tr>
                  <td>
                    <p styleName="description">
                      Tax reports for private individuals - residents of
                      Estonia, Germany and Latvia are available. Tax reports for
                      2018 for Germany and Estonia will be available from
                      January 11, 2019. For investors from other countries a
                      general tax report template is available. To receive your
                      tax report, please select your country of residence and it
                      will be sent to your email shortly. Due to various
                      accounting standards applied by legal entities there is no
                      specific report for legal entities. Please consult with
                      your accountant on how income generated through Mintos
                      should be recognised and how taxes should be calculated.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormGroup styleName="country-select">
                      <Label for="country" styleName="select-label">
                        Country
                      </Label>
                      <Input
                        type="select"
                        name="country"
                        id="country"
                        styleName="dropdown"
                      >
                        <option>South Africa</option>
                        <option>Nigeria</option>
                        <option>Ethiopia</option>
                        <option>Angola</option>
                        <option>Uganda</option>
                      </Input>
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormGroup style={{ marginBottom: 0 }}>
                      <Button type="btn-primary" size="btn-lg">
                        Submit
                      </Button>
                    </FormGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default CssModules(TaxReports, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
