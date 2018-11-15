import React from 'react';
import { Row, Col, Select, Input } from 'antd';

import './styles.css';
// Custom libs
import currencyList from '../../lib/currencyList';

const Option = Select.Option;

export default class IncomeInformation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'NGN'
    };
  }

  handleCurrencyDropdownChange = value => {
    this.setState({ currency: value });
  };

  render() {
    const { currency } = this.state;
    const currencyAddon = (
      <span>
        <Select
          defaultValue={currency}
          value={currency}
          className="currency-select"
          dropdownClassName="currency-dropdown"
          style={{ minWidth: 100, width: 'auto' }}
          dropdownMenuStyle={{ minWidth: '200px', width: 'auto' }}
          dropdownMatchSelectWidth={false}
          onChange={this.handleCurrencyDropdownChange}
          optionLabelProp="value"
          showSearch
          filterOption={(input, option) =>
            option.props.children[0]
              .toLowerCase()
              .indexOf(input.toLowerCase()) >= 0
          }
        >
          {currencyList.map((currency, cid) => (
            <Option value={currency.code} key={cid}>
              {currency.code}
              <span className="currency-name">{currency.name}</span>
            </Option>
          ))}
        </Select>
      </span>
    );

    return (
      <React.Fragment>
        <div className="body-title">
          <h2>Tell us about your income</h2>
        </div>
        <Row>
          <Col span={24}>
            <div className="form-group">
              <label>Employment status</label>
              <Select
                className="purpose-select"
                dropdownClassName="dropdown"
                placeholder="Employment status"
                style={{ width: '100%' }}
              >
                <Option value="status">Employment status</Option>
                <Option value="employed">Employed</Option>
                <Option value="self-employed">Self employed</Option>
                <Option value="other">Other</Option>
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="form-group">
              <label>Employment status</label>
              <Input
                type="text"
                placeholder="Individual yearly income"
                addonBefore={currencyAddon}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="form-group" style={{ paddingBottom: 0 }}>
              <label>Employment status</label>
              <Input
                type="text"
                placeholder="Additional yearly income (Optional)"
                addonBefore={currencyAddon}
              />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
