import React from 'react';
import { Select, Input } from 'antd';

import './styles.css';

const Option = Select.Option;

export const LoanInformationFormContent = () => {
  return (
    <React.Fragment>
      <h1 className="sectionTitle">Tell us about your loan</h1>
      <form className="onboard-form">
        <div className="formGroup">
          <Input
            type="text"
            placeholder="Amount"
            className="input"
            prefix={
              <span
                style={{
                  fontFamily: 'Arial',
                  color: 'rgba(0,0,0,.25)',
                  fontSize: '15px'
                }}
              >
                ₦
              </span>
            }
          />
        </div>
        <div className="formGroup">
          <Select
            defaultValue="purpose"
            className="purposeSelect"
            dropdownClassName="dropdown"
          >
            <Option value="purpose">Purpose</Option>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
      </form>
    </React.Fragment>
  );
};
