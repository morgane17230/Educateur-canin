/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/ControlledComponents/Field';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

// StyleSheet

import 'src/styles/createevent.scss';

const CreateEvent = ({
  chosenDay,
  setCreateEventModale,
}) => {
  console.log(chosenDay);

  return (
    <div className="event-modal">
      <div className="event-modal-content">
        <button
          className="event-modal-close"
          type="button"
          onClick={() => setCreateEventModale(false)}
        >
          <Icon path={mdiClose} title="close modal" size={0.8} />
        </button>
        <div className="event-modal-header">
          {' '}
          <span>Ajouter un rendez-vous le</span>
          <span>
            {new Date(chosenDay).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
        <form method="POST" className="event-modal-form">
          <div className="event-modal-form-parts">
            <div className="event-modal-form-part left">
              <Field
                required
                name="lastName"
                type="text"
                placeholder="Entrer un nouveau client"
                value=""
              />
            </div>
            <div className="event-modal-form-part">
              <Field
                required
                name="lastName"
                type="text"
                placeholder="Entrer un nouveau client"
                value=""
              />
            </div>
          </div>
          <button
            type="submit"
            className="event-modal-form-button"
            value={chosenDay}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

CreateEvent.propTypes = {
  chosenDay: PropTypes.instanceOf(Date).isRequired,
  setCreateEventModale: PropTypes.func.isRequired,
};

CreateEvent.defaultProps = {

};

export default CreateEvent;
