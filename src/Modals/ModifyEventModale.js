/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/ControlledComponents/Field';
import Select from 'src/containers/ControlledComponents/Select';
import Datalist from 'src/components/ControlledComponents/Datalist';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

// StyleSheet

import 'src/styles/eventmodals.scss';

const ModifyEventModale = ({
  eventValue,
  setOpenModifyEventModale,
  events,
  onGetPrestas,
  prestaId,
  startTime,
  endTime,
  prestas,
  changeField,
  chosenEventAddress,
  cities,
  setUserCity,
  searchCity,
  addresses,
  setEventAddress,
  searchAddress,
  eventAddress,
  city,
  updateEvent,
}) => {
  const currentEvent = events.find((event) => event.id === eventValue);

  const eventChosenAddress = [
    { id: 1, name: 'Adresse du client' },
    { id: 2, name: 'Autre adresse' },
  ];

  const filteredAdresses = addresses.filter(
    (filteredAddress) => filteredAddress.properties.city === city.nom,
  );

  useEffect(() => {
    onGetPrestas();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEvent(currentEvent.id);
    setOpenModifyEventModale(false);
  };

  const handleSearchCity = (e) => {
    const userCity = cities.find((ct) => ct.nom === e.target.value);
    if (userCity) {
      setUserCity(userCity);
    }
    else {
      searchCity(e.target.value);
    }
  };
  const handleSearchEventAddress = (e) => {
    const checkedEventAddress = addresses.find(
      (foundAddress) => foundAddress.properties.label === e.target.value,
    );
    if (checkedEventAddress) {
      setEventAddress('');
      setEventAddress(checkedEventAddress);
    }
    else {
      searchAddress(e.target.value);
    }
  };

  return (
    <div className="event-modal">
      <div className="event-modal-content modify">
        <button
          className="event-modal-close"
          type="button"
          onClick={() => setOpenModifyEventModale(false)}
        >
          <Icon path={mdiClose} title="close modal" size={1} />
        </button>
        <div className="event-modal-header">
          <div>
            Modifier le rendez-vous du{' '}
            <span>
              {new Date(Number(currentEvent.start_time)).toLocaleDateString(
                'fr-FR',
                {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                },
              )}
            </span>
          </div>
        </div>
        <form
          method="POST"
          className="event-modal-form"
          onSubmit={handleSubmit}
        >
          <Field
            id="startTime"
            name="startTime"
            type="datetime-local"
            placeholder="Date de début"
            onChange={changeField}
            value={startTime}
          />
          <Field
            id="endTime"
            name="endTime"
            type="datetime-local"
            placeholder="Date de fin"
            onChange={changeField}
            value={endTime}
          />
          <Select
            id="prestaId"
            name="prestaId"
            placeholder="Prestations"
            value={prestaId}
            type="select"
            datas={prestas}
            onChange={changeField}
            label="Prestations"
          />
          <div className="event-modal-form-part-subtitle">
            Lieu du rendez-vous
          </div>
          <Select
            id="chosenEventAddress"
            name="chosenEventAddress"
            placeholder="Addresse du rendez-vous"
            value={chosenEventAddress}
            type="select"
            datas={eventChosenAddress}
            onChange={changeField}
            label="Adresse du rendez-vous"
          />
          {chosenEventAddress === '2' && (
            <>
              {eventAddress.length !== 0 ? (
                <div className="event-address">
                  <div>{eventAddress}</div>
                  <button
                    className="event-modal-close"
                    type="button"
                    onClick={() => setEventAddress('')}
                  >
                    <Icon path={mdiClose} title="close modal" size={1} />
                  </button>
                </div>
              ) : (
                <>
                  <Datalist
                    id="cities"
                    name="cities"
                    type="text"
                    list="city"
                    title="Ville"
                    placeholder="Ville"
                    datas={cities}
                    onInput={handleSearchCity}
                  />
                  <Datalist
                    id="addresses"
                    name="addresses"
                    type="text"
                    list="address"
                    title="Adresse"
                    placeholder="Adresse"
                    datas={filteredAdresses}
                    onInput={handleSearchEventAddress}
                  />
                </>
              )}
            </>
          )}

          {chosenEventAddress === '1' && (
          <div className="event-address">
            <div>{currentEvent.user.address}</div>
          </div>
          )}

          <button
            type="submit"
            className="event-modal-form-button"
            value={currentEvent.id}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

ModifyEventModale.propTypes = {
  setOpenModifyEventModale: PropTypes.func.isRequired,
  onGetPrestas: PropTypes.func.isRequired,
  eventValue: PropTypes.number,
  events: PropTypes.array,
  prestaId: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  prestas: PropTypes.array,
  changeField: PropTypes.func.isRequired,
  chosenEventAddress: PropTypes.string,
  cities: PropTypes.array,
  setUserCity: PropTypes.func.isRequired,
  searchCity: PropTypes.func.isRequired,
  addresses: PropTypes.array,
  setEventAddress: PropTypes.func.isRequired,
  searchAddress: PropTypes.func.isRequired,
  eventAddress: PropTypes.string,
  city: PropTypes.object,
  updateEvent: PropTypes.func.isRequired,
};

ModifyEventModale.defaultProps = {
  prestaId: '',
  startTime: '',
  endTime: '',
  events: [],
  eventValue: 0,
  prestas: [],
  chosenEventAddress: '',
  cities: [],
  addresses: [],
  eventAddress: '',
  city: {},
};

export default ModifyEventModale;
