/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/ControlledComponents/Field';
import Select from 'src/containers/ControlledComponents/Select';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

// StyleSheet

import 'src/styles/eventmodals.scss';

const CreateEventModale = ({
  chosenDay,
  setOpenCreateEventModale,
  onGetPrestas,
  prestas,
  prestaId,
  endTime,
  firstname,
  lastname,
  email,
  phone,
  housenumber,
  street,
  postcode,
  city,
  userQuery,
  changeField,
}) => {
  useEffect(() => {
    onGetPrestas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  /* console.log(
    new Date(
      new Date(
        new Date(chosenDay).setHours(startTime[0] + startTime[1]),
      ).setMinutes(startTime[3] + startTime[4]),
    ),
  ); */

  return (
    <div className="event-modal">
      <div className="event-modal-content create">
        <button
          className="event-modal-close"
          type="button"
          onClick={() => setOpenCreateEventModale(false)}
        >
          <Icon path={mdiClose} title="close modal" size={1} />
        </button>
        <div className="event-modal-header">
          <div>Ajouter un rendez-vous le { ' ' }
            <span>
              {new Date(chosenDay).toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

        </div>
        <form
          method="POST"
          className="event-modal-form"
          onSubmit={handleSubmit}
        >
          <div className="event-modal-form-parts">
            <div className="event-modal-form-part left">
              <div>
                Heure de début :{' '}
                {`${new Date(chosenDay).getHours()} h ${new Date(
                  chosenDay,
                ).getMinutes()}`}
              </div>
              <Field
                required
                id="endTime"
                name="endTime"
                type="time"
                placeholder="Heure de fin"
                value={endTime}
                onChange={changeField}
              />

              <div className="event-modal-form-part-title">
                Chercher un client
              </div>
              <Field
                required
                id="userQuery"
                name="userQuery"
                type="text"
                placeholder="Chercher un client"
                value={userQuery}
                onChange={changeField}
              />
              <Select
                required
                id="prestaId"
                name="prestaId"
                placeholder="Prestations"
                value={prestaId}
                type="select"
                datas={prestas}
                onChange={changeField}
              />
            </div>
            <div className="event-modal-form-part">

              <div className="event-modal-form-part-title">
                Créer un nouveau client
              </div>
              <Field
                required
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Prénom"
                value={firstname}
                onChange={changeField}
              />
              <Field
                required
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Nom"
                value={lastname}
                onChange={changeField}
              />
              <Field
                required
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={changeField}
              />
              <Field
                required
                id="phone"
                name="phone"
                type="tel"
                placeholder="numéro de téléphone"
                value={phone}
                onChange={changeField}
              />
              <Field
                required
                id="housenumber"
                name="housenumber"
                type="text"
                placeholder="N°"
                value={housenumber}
                onChange={changeField}
              />
              <Field
                required
                id="street"
                name="street"
                type="text"
                placeholder="Rue"
                value={street}
                onChange={changeField}
              />
              <Field
                required
                id="postcode"
                name="postcode"
                type="text"
                placeholder="Code postal"
                value={postcode}
                onChange={changeField}
              />
              <Field
                required
                id="city"
                name="city"
                type="text"
                placeholder="Ville"
                value={city}
                onChange={changeField}
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

CreateEventModale.propTypes = {
  chosenDay: PropTypes.instanceOf(Date).isRequired,
  setOpenCreateEventModale: PropTypes.func.isRequired,
  onGetPrestas: PropTypes.func.isRequired,
  prestas: PropTypes.array.isRequired,
  prestaId: PropTypes.string,
  endTime: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  housenumber: PropTypes.string,
  street: PropTypes.string,
  postcode: PropTypes.string,
  city: PropTypes.string,
  userQuery: PropTypes.string,
  changeField: PropTypes.func.isRequired,
};

CreateEventModale.defaultProps = {
  prestaId: '',
  endTime: '',
  userQuery: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  housenumber: '',
  street: '',
  postcode: '',
  city: '',
};

export default CreateEventModale;
