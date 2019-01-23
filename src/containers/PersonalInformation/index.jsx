/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Card, CardBody, Table } from 'reactstrap';
import SectionTitle from '../../components/SectionTitle';
import styles from './styles.scss';

const PersonalInformation = () => {
  return (
    <div styleName="personal-information-page">
      <SectionTitle size="2">Personal Information</SectionTitle>
      <Card>
        <CardBody>
          <Table styleName="table">
            <tbody>
              <tr>
                <td>Account ID</td>
                <td styleName="data" colSpan="2">
                  7547145
                </td>
              </tr>
              <tr>
                <td>First Name</td>
                <td styleName="data" colSpan="2">
                  David
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td styleName="data" colSpan="2">
                  Kalu
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td styleName="data">Male</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td styleName="data">23.11.1993</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Field of Work</td>
                <td styleName="data">Infromation Technology</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Seniority Level</td>
                <td styleName="data">Entry Level</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td styleName="data">21 Olanireti Fasan</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Country</td>
                <td styleName="data">South Africa</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td styleName="data">+2348167440387</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td styleName="data">dave.i.kalu@gmail.com</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
              <tr>
                <td>Language</td>
                <td styleName="data">English</td>
                <td styleName="setting-action">
                  <a href="#">Edit</a>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CssModules(PersonalInformation, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
