/* eslint-disable import/no-unresolved */

import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const CardModal = props => {
  const { cardModal, toggleCardModal } = props;
  return (
    <Modal isOpen={cardModal} toggle={() => toggleCardModal()}>
      <ModalHeader toggle={() => toggleCardModal()}>Add a card</ModalHeader>
      <ModalBody>
        <form>
          <div styleName="form-group">
            <input type="text" placeholder="Card number" />
          </div>
          <div styleName="form-group inline">
            <input type="text" placeholder="Expiry Date" />
            <input type="text" placeholder="CVV" />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => toggleCardModal()}>
          Do Something
        </Button>
        <Button color="secondary" onClick={() => toggleCardModal()}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CardModal;

CardModal.propTypes = {
  cardModal: PropTypes.bool,
  toggleCardModal: PropTypes.func
};
