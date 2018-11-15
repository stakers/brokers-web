import React from 'react';
import { Drawer, Steps, Row, Col, Icon, Button, message } from 'antd';

// Components
import LoanInformation from '../../components/LoanRequestComponents/LoanInformation';
import IncomeInformation from '../../components/LoanRequestComponents/IncomeInformation';
import PersonalInformation from '../../components/LoanRequestComponents/PersonalInformation';
import Review from '../../components/LoanRequestComponents/Review';

// styles
import './styles.css';

const Step = Steps.Step;

const steps = [
  {
    title: 'Loan information',
    component: <LoanInformation />
  },
  {
    title: 'Personal information',
    component: <PersonalInformation />
  },
  {
    title: 'Income information',
    component: <IncomeInformation />
  },
  {
    title: 'Review',
    component: <Review />
  }
];

export default class LoanRequestDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

  next = () => {
    const next = this.state.current + 1;
    this.setState({ current: next });
  };

  prev = () => {
    const previous = this.state.current - 1;
    this.setState({ current: previous });
  };

  render() {
    const { current } = this.state;

    return (
      <Drawer
        title={
          <div className="drawer-header">
            <Row type="flex" align="middle">
              <Col span={4}>
                <h3>Brokers</h3>
              </Col>
              <Col lg={16}>
                <Steps
                  progressDot
                  current={current}
                  size="small"
                  className="steps"
                >
                  {steps.map((step, sid) => (
                    <Step key={sid} title={step.title} />
                  ))}
                </Steps>
              </Col>
              <Col span={4}>
                <div className="close-icon">
                  <Icon
                    type="close"
                    theme="outlined"
                    style={{
                      color: '#00b9ff',
                      fontSize: '32px',
                      cursor: 'pointer'
                    }}
                    onClick={() => this.props.closeDrawer()}
                  />
                </div>
              </Col>
            </Row>
          </div>
        }
        closable={false}
        onClose={this.props.closeDrawer}
        visible={this.props.isDrawerVisible}
        placement="bottom"
        className="drawer"
        width="100%"
        height="100%"
      >
        <div>
          <Row type="flex" justify="center">
            <Col span={10}>
              <div className="body-content">
                <div className="steps-body">
                  {steps[current].component}
                  {/* Steps body */}
                </div>
                {/* Steps body end */}
                {/* Steps footer */}
                <div className="steps-footer">
                  <Row>
                    <Col span={24}>
                      <div className="button-group">
                        {current === steps.length - 1 ? null : (
                          <Button
                            size="large"
                            disabled={
                              current === 0 || current === steps.length - 1
                                ? true
                                : false
                            }
                            onClick={() => this.prev()}
                          >
                            Back
                          </Button>
                        )}

                        {current === steps.length - 1 && (
                          <Button
                            type="primary"
                            size="large"
                            onClick={() => message.success('Request completed')}
                            block
                            className="btn-confirm"
                          >
                            Complete application
                          </Button>
                        )}
                        {current < steps.length - 1 && (
                          <Button
                            type="primary"
                            size="large"
                            onClick={() => this.next()}
                          >
                            Next
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <p>By continuing you accept our Terms of Use</p>
                    </Col>
                  </Row>
                </div>
                {/* Steps footer end */}
              </div>
            </Col>
          </Row>
        </div>
      </Drawer>
    );
  }
}
