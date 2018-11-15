import React from 'react';
import { Select, Input } from 'antd';

import './styles.css';

const Option = Select.Option;

export const IncomeInformationFormContent = () => {
  return (
    <React.Fragment>
      <h1 className="sectionTitle">Tell us about your income</h1>
      <form className="onboard-form">
        <div className="formGroup">
          <Select
            defaultValue="purpose"
            className="purposeSelect"
            dropdownClassName="dropdown"
          >
            <Option value="purpose">Employment status</Option>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className="formGroup">
          <Input
            type="text"
            placeholder="Individual yearly income"
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
          <Input
            type="text"
            placeholder="Additional yearly income (Optional)"
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
      </form>
    </React.Fragment>
  );
};
