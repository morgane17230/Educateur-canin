/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/ControlledComponents/Field';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

// StyleSheet

import 'src/styles/eventmodal.scss';

const CreateEvent = ({
  setOpenCreateModal,
  chosenDay,
  changeField,
  lastName,
  number,
  street,
  postalCode,
  city,
  startTime,
  endTime,
  prestation,
  onCreateEvent,
  onSearchUser,
  onSelectPrestation,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateEvent(chosenDay);
  };

  const handleOnSearch = (evt) => {
    onSearchUser(evt.target.value);
  };

  const handleSelectPrestation = (evt) => {
    evt.preventDefault();
    onSelectPrestation(evt.target.value);
  };

  return (
    <div className="event-modal">
      <button
        className="event-modal-close"
        type="button"
        onClick={() => setOpenCreateModal(false)}
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

      <form
        method="POST"
        className="event-modal-form"
        onSubmit={handleSubmit}
      >
        <select
          className="event-modal-form-input"
          name="prestation"
          onChange={handleSelectPrestation}
          value={prestation}
        >
          <option value="">Prestation</option>
          <option value="1">Prestation1</option>
          <option value="2">Prestation2</option>
          <option value="3">Prestation3</option>
        </select>
        <label htmlFor="search" title="search" data-title="recherche" />
        <input
          required
          name="search"
          id="search"
          type="text"
          placeholder="Chercher un client"
          onChange={handleOnSearch}
        />
        ou
        <Field
          required
          name="lastName"
          id={lastName}
          type="text"
          placeholder="Entrer un nouveau client"
          onChange={changeField}
          value={lastName}
        />
        <Field
          required
          name="startTime"
          type="time"
          placeholder="Heure de début"
          onChange={changeField}
          value={startTime}
        />
        <Field
          required
          name="endTime"
          type="time"
          placeholder="Heure de fin"
          onChange={changeField}
          value={endTime}
        />
        <span>Adresse : </span>
        <Field
          required
          name="number"
          type="text"
          placeholder="Numéro de voie"
          onChange={changeField}
          value={number}
        />
        <Field
          required
          name="street"
          type="text"
          placeholder="Nom de la voie"
          onChange={changeField}
          value={street}
        />
        <Field
          required
          name="postalCode"
          type="text"
          placeholder="Code postal"
          onChange={changeField}
          value={postalCode}
        />
        <Field
          required
          name="city"
          type="text"
          placeholder="Ville"
          onChange={changeField}
          value={city}
        />
        <button
          type="submit"
          className="event-modal-form-button"
          value={chosenDay}
        >
          Valider
        </button>
      </form>
    </div>
  );
};

CreateEvent.propTypes = {
  lastName: PropTypes.string,
  number: PropTypes.string,
  street: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  prestation: PropTypes.string,
  setOpenCreateModal: PropTypes.func.isRequired,
  chosenDay: PropTypes.instanceOf(Date).isRequired,
  changeField: PropTypes.func.isRequired,
  onCreateEvent: PropTypes.func.isRequired,
  onSearchUser: PropTypes.func.isRequired,
  onSelectPrestation: PropTypes.func.isRequired,
};

CreateEvent.defaultProps = {
  lastName: '',
  number: '',
  street: '',
  postalCode: '',
  city: '',
  startTime: '',
  endTime: '',
  prestation: '',
};

export default CreateEvent;
