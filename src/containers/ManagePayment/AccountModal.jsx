/* eslint-disable import/no-unresolved */

import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const AcccountModal = props => {
  const { accountModal, toggleAccountModal } = props;
  return (
    <Modal isOpen={accountModal} toggle={() => toggleAccountModal()}>
      <ModalHeader toggle={() => toggleAccountModal()}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => toggleAccountModal()}>
          Do Something
        </Button>
        <Button color="secondary" onClick={() => toggleAccountModal()}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AcccountModal;

AcccountModal.propTypes = {
  accountModal: PropTypes.bool,
  toggleAccountModal: PropTypes.func
};
