/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';
import { Row, Col, Card, CardBody, CardText } from 'reactstrap';
import Button from '../../components/Button';
import countries from '../../constants/countries';
import styles from './styles.scss';

class Signup extends Component {
  render() {
    return (
      <div styleName="signup-page">
        <nav>
          <a href="#" styleName="header-logo" />
        </nav>
        <div styleName="signup-content">
          <Row>
            <Col md="5">
              <form styleName="signup-form" onSubmit={e => e.preventDefault()}>
                <div styleName="signup-form-header">
                  <h3>Investor Registration Form</h3>
                </div>
                <div styleName="radio-button-group">
                  <span>
                    <input
                      type="radio"
                      name="notes_type"
                      id="individual"
                      value="individual"
                      defaultChecked
                    />
                    <label htmlFor="individual">Individual</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      name="notes_type"
                      id="company"
                      value="company"
                    />
                    <label htmlFor="company">Company</label>
                  </span>
                </div>
                <div>
                  <div styleName="form-items">
                    <div styleName="form-group">
                      <label htmlFor="country">Country</label>
                      <select name="country" id="country" required>
                        {countries.map((country, id) => (
                          <option key={id}>{country.name}</option>
                        ))}
                      </select>
                    </div>
                    <div styleName="form-group">
                      <label htmlFor="first_name" styleName="label">
                        First name
                      </label>
                      <input
                        type="text"
                        styleName="input-field"
                        placeholder="Last name"
                        id="first_name"
                      />
                    </div>
                    <div styleName="form-group">
                      <label htmlFor="last_name" styleName="label">
                        Last name
                      </label>
                      <input
                        type="text"
                        styleName="input-field"
                        placeholder="Last name"
                        id="last_name"
                      />
                    </div>
                    <div styleName="form-group">
                      <label htmlFor="email" styleName="label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        styleName="input-field"
                        placeholder="E-mail address"
                        id="email"
                      />
                    </div>
                    <div styleName="form-group">
                      <label htmlFor="phone" styleName="label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        styleName="input-field"
                        placeholder="Phone number"
                        id="phone"
                      />
                    </div>
                    <div styleName="form-group">
                      <label htmlFor="password" styleName="label">
                        Password
                      </label>
                      <input
                        type="password"
                        styleName="input-field"
                        placeholder="Password"
                      />
                    </div>
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      block
                      styleName="submit-btn"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </form>
            </Col>
            <Col md={{ size: 5, offset: 2 }}>
              <p>
                If you already have a Mintos investor account, log in{' '}
                <a href="#">here</a>
              </p>
              <Card>
                <CardBody>
                  <CardText>
                    Register today and join the 110 659 other investors who have
                    earned € 34 217 130 in interest to date
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CssModules(Signup, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
