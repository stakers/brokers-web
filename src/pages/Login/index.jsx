/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './styles.scss';

class Login extends Component {
  render() {
    return (
      <div styleName="login-page">
        <nav>
          <a href="#" styleName="header-logo" />
        </nav>
        <div styleName="login-content">
          <form styleName="login-form" onSubmit={e => e.preventDefault()}>
            <div styleName="login-form-header">
              <h3>Log in to your account</h3>
              <p>
                Prospective investors can register{' '}
                <NavLink to="/signup">here</NavLink>
              </p>
            </div>
            <div>
              <div styleName="form-items">
                <div styleName="form-group">
                  <input
                    type="email"
                    styleName="input-field"
                    placeholder="E-mail address"
                  />
                </div>
                <div styleName="form-group">
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
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CssModules(Login, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
