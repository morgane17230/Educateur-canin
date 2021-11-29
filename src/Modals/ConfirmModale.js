/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

// StyleSheet

import 'src/styles/confirmmodal.scss';

const ConfirmModal = ({ setOpenConfirmModale, eventValue, deleteEvent }) => (
  <div className="confirm-modal">
    <div className="confirm-modal-content">
      <button
        className="confirm-modal-close"
        type="button"
        onClick={() => setOpenConfirmModale(false)}
      >
        <Icon path={mdiClose} title="close modal" size={1} />
      </button>
      <div className="confirm-modal-header">Confirmation de la suppression</div>
      <div className="confirm-modal-body">
        Vous vous apprêtez à supprimer un événement, souhaitez-vous confirmer la
        suppression ?
      </div>
      <div className="confirm-modal-footer">
        <button
          className="confirm-modal-button"
          type="button"
          onClick={() => setOpenConfirmModale(false)}
        >
          Annuler
        </button>
        <button
          className="confirm-modal-button"
          type="button"
          onClick={() => {
            deleteEvent(eventValue);
            setOpenConfirmModale(false);
          }}
        >
          Valider
        </button>
      </div>
    </div>
  </div>
);

ConfirmModal.propTypes = {
  eventValue: PropTypes.number,
  setOpenConfirmModale: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

ConfirmModal.defaultProps = {
  eventValue: 0,
};

export default ConfirmModal;
