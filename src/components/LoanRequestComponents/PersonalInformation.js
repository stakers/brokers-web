// Dependencies
import React from 'react';
import { Row, Col, Select, Input, DatePicker } from 'antd';

import './styles.css';

// Custom libs
import currencyList from '../../lib/currencyList';
// import phoneCountryCode from '../../lib/phone';
const Option = Select.Option;

export default class LoanInformation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'NGN',
      dob: '',
      phone: ''
    };
  }

  handleCurrencyDropdownChange = value => {
    this.setState({ currency: value });
  };

  handleCountryCodeChange = value => {
    console.log(value);
    // this.setState({ countryCode: value });
  };

  selectFlagHandler = (name, currentNumber) => {
    this.setState({
      [name]: currentNumber
    });
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
    // const phoneAddon = (
    //   <span>
    //     <Select
    //       defaultValue="234"
    //       value={countryCode}
    //       className="country-code-select"
    //       dropdownClassName="country-code-dropdown"
    //       style={{ minWidth: 100, width: 'auto' }}
    //       dropdownMenuStyle={{ minWidth: '200px', width: 'auto' }}
    //       dropdownMatchSelectWidth={false}
    //       onChange={this.handleCountryCodeChange}
    //       optionLabelProp="value"
    //       //   showSearch
    //       //   filterOption={(input, option) =>
    //       //     option.props.children[0]
    //       //       .toLowerCase()
    //       //       .indexOf(input.toLowerCase()) >= 0
    //       //   }
    //     >
    //       {phoneCountryCode.map((phone, id) => (
    //         <Option key={id} value={phone.dial_code}>
    //           {phone.dial_code} {phone.code}
    //         </Option>
    //       ))}
    //     </Select>
    //   </span>
    // );
    return (
      <React.Fragment>
        <div className="body-title">
          <h2>Tell us about yourself</h2>
        </div>
        <Row gutter={16}>
          <Col xl={12} xs={24}>
            <div className="form-group">
              <label>First name</label>
              <Input type="text" placeholder="First name" />
            </div>
          </Col>
          <Col xl={12} xs={24}>
            <div className="form-group">
              <label>Last name</label>
              <Input type="text" placeholder="Last name" />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <div className="form-group">
              <label>Date of birth</label>
              <DatePicker
                onChange={date => {
                  //   this.setState({ dob: date });
                  console.log(date);
                }}
                placeholder="Select month"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="form-group">
              <label>Phone number</label>
              <Row gutter={8}>
                <Col span={8}>
                  <Input type="text" placeholder="Phone code" />
                </Col>
                <Col span={16}>
                  <Input type="text" placeholder="Phone number" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <h4 className="page-header">Address</h4>
        <Row gutter={16}>
          <Col span={12}>
            <div className="form-group" style={{ paddingBottom: 0 }}>
              <label>Country</label>
              <Select
                className="purpose-select"
                dropdownClassName="dropdown"
                placeholder="Purpose"
                style={{ width: '100%' }}
              >
                <Option value="purpose">Purpose</Option>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </Col>
          <Col span={12}>
            <div className="form-group">
              <label>Address</label>
              <Input type="text" placeholder="Address" />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <div className="form-group">
              <label>City</label>
              <Input type="text" placeholder="City" />
            </div>
          </Col>
          <Col span={12}>
            <div className="form-group">
              <label>Postal code</label>
              <Input type="text" placeholder="Postal code" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="form-group" style={{ paddingBottom: 0 }}>
              <label>Monthly rent</label>
              <Input
                type="text"
                placeholder="Monthly Housing Payment"
                addonBefore={currencyAddon}
              />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
