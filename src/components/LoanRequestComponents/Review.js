import React from 'react';
import { Row, Col, Divider } from 'antd';

// Custom libs
import './styles.css';

export default class Review extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="body-title">
          <h2>Review details of your loan</h2>
        </div>
        <Row>
          <Col span={24}>
            <div className="container p-5">
              <div className="section section-header">
                <span className="header-title">Loan details</span>
                <span className="header-action">Edit</span>
              </div>
              <div className="section section-item">
                <span className="title">Amount</span>
                <span className="detail">$10,000</span>
              </div>
              <div className="section section-item">
                <span className="title">Purpose</span>
                <span className="detail">Debt consolidation</span>
              </div>
              <Divider style={{ marginTop: '0', marginBottom: 24 }} />
              <div className="section section-header">
                <span className="header-title">Personal details</span>
                <span className="header-action">Edit</span>
              </div>
              <div className="section section-item">
                <span className="title">Full name</span>
                <span className="detail light-text">David Kalu</span>
              </div>
              <div className="section section-item">
                <span className="title">Date of birth</span>
                <span className="detail light-text">23/11/1188</span>
              </div>
              <div className="section section-item">
                <span className="title">Phone</span>
                <span className="detail light-text">+2348167440327</span>
              </div>
              <Divider style={{ marginTop: '0', marginBottom: 24 }} />
              <div className="section section-header">
                <span className="header-title">Address information</span>
                <span className="header-action">Edit</span>
              </div>
              <div className="section section-item">
                <span className="title">Country</span>
                <span className="detail light-text">Nigerian</span>
              </div>
              <div className="section section-item">
                <span className="title">Address</span>
                <span className="detail light-text">
                  46, Acme crescent Omole Phase 3
                </span>
              </div>
              <div className="section section-item">
                <span className="title">City</span>
                <span className="detail light-text">Ikeja</span>
              </div>
              <div className="section section-item">
                <span className="title">Postal code</span>
                <span className="detail light-text">100200</span>
              </div>
              <div className="section section-item">
                <span className="title">Monthly rent</span>
                <span className="detail">$ 40000</span>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
