// Dependencies
import React from 'react';
import { Layout, Icon, Table } from 'antd';

// Components
import BorrowerDashboardHeader from '../../components/BorrowerDashboardHeader';

import './styles.css';
const { Content } = Layout;

const columns = [
  {
    title: 'Loan originator',
    dataIndex: 'originator',
    key: 'originator'
  },
  {
    title: 'Loan type',
    dataIndex: 'loanType',
    key: 'loanType'
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country'
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency'
  },
  {
    title: 'Loans funded',
    dataIndex: 'loansFunded',
    key: 'loansFunded'
  },
  {
    title: 'Interest rate',
    key: 'interestRate',
    dataIndex: 'interestRate'
  }
];

const data = [
  {
    key: '1',
    originator: 'Simbo.dk',
    loanType: 'Short term loan',
    country: 'Denmark',
    currency: 'EUR, DKK',
    loansFunded: '€10.4M',
    interestRate: '11.4%'
  },
  {
    key: '2',
    originator: 'RapiCredit',
    loanType: 'Personal loans, Short term loan',
    country: 'FYR of Macedonia',
    currency: 'EUR, DKK',
    loansFunded: '€12.4M',
    interestRate: '12.0%'
  },
  {
    key: '3',
    originator: 'Sebo.md',
    loanType: 'Business loans, Short term loan',
    country: 'Kenya',
    currency: 'EUR, DKK',
    loansFunded: '€12.4M',
    interestRate: '10.0%'
  },
  {
    key: '4',
    originator: 'Vizia',
    loanType: 'Business loans, Short term loan',
    country: 'Latvia',
    currency: 'EUR, DKK',
    loansFunded: '€12.4M',
    interestRate: '10.0%'
  }
];

// const menu = (
//   <Menu>
//     <Menu.Item key="1">Today</Menu.Item>
//     <Menu.Item key="2">This week</Menu.Item>
//     <Menu.Item key="3">This month</Menu.Item>
//     <Menu.Item key="3">Last 30 days</Menu.Item>
//     <Menu.Item key="3">This year</Menu.Item>
//     <Menu.Item key="3">All time</Menu.Item>
//   </Menu>
// );

export default class Pool extends React.Component {
  render() {
    const noLoans = false;
    return (
      <React.Fragment>
        <BorrowerDashboardHeader
          title="Lending pool"
          headerIcon={
            <Icon
              type="project"
              theme="twoTone"
              style={{
                fontSize: '42px',
                marginRight: '24px',
                verticalAlign: 'middle'
              }}
              twoToneColor="rgb(0, 172, 104)"
            />
          }
        />
        <div className="data-panel">
          <Table
            columns={columns}
            dataSource={data}
            onRow={record => {
              return {
                // onClick: () => {
                //   Router.replace('/borrower/transactionsPage');
                // }
              };
            }}
          />
        </div>
        {noLoans ? (
          <div className="empty-content-panel">
            <Content
              style={{
                margin: '16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              <div className="intro-container">
                <Icon
                  type="cluster"
                  theme="twoTone"
                  style={{
                    fontSize: '64px',
                    verticalAlign: 'middle',
                    fontWeight: 100
                  }}
                  twoToneColor="rgb(0, 172, 104)"
                />
                <h3 className="intro-container-title">Lending pool is empty</h3>
                <p className="intro-container-desc">
                  All loans in the lending pool and status will be listed here.
                </p>
              </div>
            </Content>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
