/* eslint-disable  import/no-unresolved */
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Row, Col } from 'reactstrap';
import styles from './styles.scss';

import Notification from '../../containers/Notification';
import SectionTitle from '../../components/SectionTitle';
import InfoBox from '../../containers/InfoBox';
import NewsFeed from '../../containers/NewsFeed';

class OverviewPage extends Component {
  render() {
    const balanceData = [
      { key: 'Available Funds', value: '$0.00' },
      { key: 'Invested Funds', value: '$0.00' }
    ];
    const netAnnualReturnData = [
      { key: 'Interest', value: '$0.00' },
      { key: 'Late Payment Fees', value: '$0.00' },
      { key: 'Bad Debt', value: '$0.00' },
      { key: 'Secondary Market Transactions', value: '$0.00' },
      { key: 'Service Fees', value: '$0.00' },
      { key: 'Campaign Rewards', value: '$0.00' }
    ];
    const investmentsData = [
      { key: 'Current', value: '$0.00' },
      { key: 'Grace Period', value: '$0.00' },
      { key: '1-15 Days Late', value: '$0.00' },
      { key: '16-30 Days Late', value: '$0.00' },
      { key: '31-60 Days Late', value: '$0.00' },
      { key: '60+ Days Late', value: '$0.00' },
      { key: 'Default', value: '$0.00' },
      { key: 'Bad Debt', value: '$0.00' }
    ];
    const news = [
      {
        date: '08.01.2019',
        link: "Let's win this one together: AltFi People's Choice Award 2018"
      },
      { date: '21.12.2018', link: 'Changes to Lendo investment structure' },
      { date: '21.12.2018', link: 'Working hours and holidays' },
      {
        date: '10.12.2018',
        link: 'Metrokredit Update: Change of "skin in the game" - 15% to 10%'
      },
      {
        date: '10.12.2018',
        link: '	Plish invoice financing loan originator eFaktor joins Mintos'
      },
      {
        date: '07.12.2018',
        link:
          'Warm news for a cold December: welcome GetBucks South Africa to Mintos'
      },
      {
        date: '06.12.2018',
        link: 'Join Mintos for the Investor Starter Pack x5'
      },
      {
        date: '04.12.2018',
        link:
          'Mintos welcomes an innovative lender from the UK – Cash On Go brings us Peachy!'
      },
      {
        date: '29.11.2018',
        link: 'Dindin and BIG leave Mintos marketplace'
      },
      {
        date: '29.11.2018',
        link:
          'There are now more investment opportunities from FYR of Macedonia on Mintos'
      }
    ];
    return (
      <React.Fragment>
        <Notification color="danger" />
        <div styleName="content">
          <SectionTitle size="1">Overview</SectionTitle>
          <div styleName="info-cards">
            <Row>
              <Col>
                <InfoBox
                  title="Account Balance"
                  value="$0.00"
                  data={balanceData}
                  btnText="Add Funds"
                />
              </Col>
              <Col>
                <InfoBox
                  title="Net Annual Return"
                  value="$0.00"
                  data={netAnnualReturnData}
                  btnText="Invest"
                />
              </Col>
              <Col>
                <InfoBox
                  title="My Investments"
                  value="0"
                  data={investmentsData}
                >
                  <div styleName="notes_type_container">
                    <span>
                      <input
                        type="radio"
                        name="notes_type"
                        id="amount"
                        value="amount"
                        defaultChecked
                      />
                      <label htmlFor="amount">By Amount</label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        name="notes_type"
                        id="number"
                        value="number"
                      />
                      <label htmlFor="number">By Number</label>
                    </span>
                  </div>
                </InfoBox>
              </Col>
            </Row>
          </div>
          <Row>
            <Col>
              <NewsFeed data={news} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default CSSModules(OverviewPage, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
