// Dependencies
import React from 'react';
import {
  Layout,
  Icon,
  Dropdown,
  Menu,
  Button,
  Table,
  Divider
} from 'antd';
import LoanRequestDrawer from './LoanRequestDrawer';

// Components
import BorrowerDashboardHeader from '../../components/BorrowerDashboardHeader';

// styles
import './styles.css';

const { Content } = Layout;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        Invite {record.name}
        <Divider type="vertical" />
        Delete
      </span>
    )
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

const menu = (
  <Menu>
    <Menu.Item key="1">Today</Menu.Item>
    <Menu.Item key="2">This week</Menu.Item>
    <Menu.Item key="3">This month</Menu.Item>
    <Menu.Item key="3">Last 30 days</Menu.Item>
    <Menu.Item key="3">This year</Menu.Item>
    <Menu.Item key="3">All time</Menu.Item>
  </Menu>
);

export default class Loans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerVisible: false
    };
  }

  showRequestPage = () => {
    this.setState({
      isDrawerVisible: true
    });
  };

  closeDrawer = () => {
    this.setState({
      isDrawerVisible: false
    });
  };

  render() {
    const { isDrawerVisible } = this.state;
    const noLoans = false;
    return (
      <React.Fragment>
        <LoanRequestDrawer
          isDrawerVisible={isDrawerVisible}
          closeDrawer={this.closeDrawer}
        />
        <BorrowerDashboardHeader
          title="Loan requests"
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
          headerActions={
            <div className="page-header-index-content-right">
              <Button
                type="primary"
                className="action-button"
                onClick={() => this.showRequestPage()}
              >
                New loan request
              </Button>
              <Dropdown overlay={menu}>
                <Button className="dropdown-button">
                  Last 30 days{' '}
                  <Icon type="down" style={{ color: 'rgb(0, 172, 104)' }} />
                </Button>
              </Dropdown>
            </div>
          }
        />
        <div className="data-panel">
          <Table columns={columns} dataSource={data} />
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
                  type="project"
                  theme="twoTone"
                  style={{
                    fontSize: '64px',
                    verticalAlign: 'middle',
                    fontWeight: 100
                  }}
                  twoToneColor="rgb(0, 172, 104)"
                />
                <h3 className="intro-container-title">No loan requests</h3>
                <p className="intro-container-desc">
                  All your loan requests and status of your loans will be listed
                  here.
                </p>
              </div>
            </Content>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
