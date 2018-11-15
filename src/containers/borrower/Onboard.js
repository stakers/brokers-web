// Dependecies
import React, { Component } from 'react';
import { Steps, Button, message, Row, Col, Layout, Icon } from 'antd';
import { LoanInformationFormContent } from '../../components/LoanInformationFormContent';
import { CreateAccountFormContent } from '../../components/CreateAccountFormContent';
import { IncomeInformationFormContent } from '../../components/IncomeInformationFormContent';
import { PersonalInformationFormContent } from '../../components/PersonalInformationFormContent';

// styles
import './styles.css';

// Components
const { Header, Content, Footer } = Layout;

export default class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  };

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  renderSteps = () => {
    const { current } = this.state;
    let node;
    switch (current) {
      case 0:
        node = <LoanInformationFormContent />;
        break;
      case 1:
        node = <PersonalInformationFormContent />;
        break;
      case 2:
        node = <IncomeInformationFormContent />;
        break;
      case 3:
        node = <CreateAccountFormContent />;
        break;
      default:
        break;
    }
    return node;
  };

  render() {
    const Step = Steps.Step;
    const { current } = this.state;
    const steps = 3;
    return (
      <React.Fragment>
        <Layout
          style={{
            background: '#f8f8fc'
          }}
        >
          <Header style={{ background: '#113b5e' }} className="header">
            <h3>Header</h3>
            <span className="account">
              <Icon
                type="user"
                theme="outlined"
                style={{ color: '#fff', fontSize: '16px' }}
              />
              <span>Sign in</span>
            </span>
          </Header>
          <Content style={{ padding: '4em 0' }}>
            <div className="stepsContainer">
              <Steps progressDot current={current} style={{ width: '80%' }}>
                <Step title={<span className="step">Loan information</span>} />
                <Step
                  title={<span className="step">Personal information</span>}
                />
                <Step
                  title={<span className="step">Income information</span>}
                />
                <Step title={<span className="step">Create account</span>} />
              </Steps>
            </div>
            <Row type="flex" justify="center">
              <Col span={10}>
                <div className="onboardWrapper">
                  {current > 0 && (
                    <Icon
                      type="left-circle"
                      theme="outlined"
                      onClick={() => this.prev()}
                    />
                  )}
                  <Row type="flex" justify="center" style={{ flex: 1 }}>
                    <Col span={20} pull={current > 0 ? 1 : 0}>
                      <div>
                        <React.Fragment>{this.renderSteps()}</React.Fragment>
                        <div className="stepsAction">
                          {current < steps && (
                            <Button
                              type="primary"
                              onClick={() => this.next()}
                              className="largeButton"
                            >
                              Next
                            </Button>
                          )}
                          {current === steps && (
                            <Button
                              type="primary"
                              // onClick={() =>
                              //   message.success(
                              //     'Processing complete!',
                              //     3,
                              //     () => {
                              //       Router.replace('/borrower');
                              //     }
                              //   )
                              // }
                              className="largeButton"
                            >
                              Check your rates
                            </Button>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Content>
          <Footer
            style={{
              height: '200px',
              background: '#113b5e'
            }}
          >
            <h3>Footer</h3>
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}
