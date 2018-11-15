import React from 'react';
import { Select, Input, Row, Col } from 'antd';

import './styles.css';
const Option = Select.Option;

export const PersonalInformationFormContent = () => {
  return (
    <React.Fragment>
      <h1 className="sectionTitle">Tell us about yourself</h1>
      <form className="onboard-form">
        <div className="formGroup">
          <Row gutter={16}>
            <Col span={12}>
              <Input type="text" placeholder="First name" className="input" />
            </Col>
            <Col span={12}>
              <Input type="text" placeholder="Last name" className="input" />
            </Col>
          </Row>
        </div>
        <div className="formGroup">
          <Input
            type="text"
            placeholder="Date of Birth (MM/DD/YYYY)"
            className="input"
          />
        </div>
        <div className="formGroup">
          <Input type="text" placeholder="Zip code" className="input" />
        </div>
        <div className="formGroup">
          <Input type="text" placeholder="Home address" className="input" />
        </div>
        <div className="formGroup">
          <Row gutter={16}>
            <Col span={12}>
              <Input type="text" placeholder="City" className="input" />
            </Col>
            <Col span={12}>
              <Select
                defaultValue="state"
                className="purposeSelect"
                dropdownClassName="dropdown"
              >
                <Option value="state">State</Option>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>
        </div>
        <div className="formGroup">
          <Input
            type="text"
            placeholder="Monthly housing payment"
            className="input"
          />
        </div>
      </form>
    </React.Fragment>
  );
};
