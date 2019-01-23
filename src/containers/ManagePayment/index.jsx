/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Card, CardBody } from 'reactstrap';
import SectionTitle from '../../components/SectionTitle';
import PageRows from './PageRows';
import styles from './styles.scss';

class ManagePayment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCards: false,
      showAccounts: false
    };
  }

  toggleShowCards = () => {
    this.setState({
      showCards: !this.state.showCards,
      showAccounts: false
    });
  };

  toggleShowAccounts = () => {
    this.setState({
      showCards: false,
      showAccounts: !this.state.showAccounts
    });
  };

  render() {
    const { showAccounts, showCards } = this.state;
    return (
      <div styleName="payment-information-page">
        <SectionTitle size="2">Manage Payment</SectionTitle>
        <Card>
          <CardBody>
            {!showCards && !showAccounts && (
              <PageRows
                toggleShowAccounts={this.toggleShowAccounts}
                toggleShowCards={this.toggleShowCards}
              />
            )}
            {showCards && <span>All cards</span>}
            {showAccounts && <span>All accounts</span>}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CssModules(ManagePayment, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: 'log'
});
