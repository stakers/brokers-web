/* eslint-disable  import/no-unresolved */

import React from 'react';
import CssModules from 'react-css-modules';
import { Card, CardBody } from 'reactstrap';
import SectionTitle from '../../components/SectionTitle';
import PageRows from './PageRows';
import Cards from './Cards';
import Accounts from './Accounts';
import styles from './styles.scss';
import CardModal from './CardModal';
import AccountModal from './AccountModal';

class ManagePayment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCards: false,
      showAccounts: false,
      cardModal: false,
      accountModal: false
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

  toggleAddCardModal = () => {
    // this.setState({
    //   cardModal: !this.state.cardModal
    // });
  };

  toggleAddAccountModal = () => {
    // this.setState({
    //   accountModal: !this.state.accountModal
    // });
  };

  render() {
    const { showAccounts, showCards, cardModal, accountModal } = this.state;
    return (
      <div styleName="payment-information-page">
        <CardModal
          toggleCardModal={this.toggleAddCardModal}
          cardModal={cardModal}
        />
        <AccountModal
          toggleAccountModal={this.toggleAddAccountModal}
          accountModal={accountModal}
        />

        {!showCards && !showAccounts && (
          <SectionTitle size="2">Manage Payment</SectionTitle>
        )}
        {showCards && (
          <SectionTitle size="2">Manage Payment &gt; Cards</SectionTitle>
        )}
        {showAccounts && (
          <SectionTitle size="2">Manage Payment &gt; Accounts</SectionTitle>
        )}
        <Card>
          <CardBody>
            {!showCards && !showAccounts && (
              <PageRows
                toggleShowAccounts={this.toggleShowAccounts}
                toggleShowCards={this.toggleShowCards}
              />
            )}
            {showCards && (
              <Cards
                toggleShowCards={this.toggleShowCards}
                toggleAddCardModal={this.toggleAddCardModal}
              />
            )}
            {showAccounts && (
              <Accounts
                toggleShowAccounts={this.toggleShowAccounts}
                toggleAddAccountModal={this.toggleAddAccountModal}
              />
            )}
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
