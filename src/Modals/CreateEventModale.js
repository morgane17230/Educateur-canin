/* eslint-disable jsx-a11y/control-has-associated-label */
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
  addresses,
  city,
  changeField,
  searchUsers,
  users,
  searchCity,
  cities,
  searchAddress,
  setUserAddress,
  setUserCity,
  chosenUser,
  setChosenUser,
  client,
  chosenEventAddress,
  setEventAddress,
  eventAddress,
  createUser,
  setStartTime,
  createEvent,
}) => {
  useEffect(() => {
    onGetPrestas();
    setStartTime(chosenDay);
  }, []);

  const userChoice = [
    { id: 1, name: 'Nouveau client' },
    { id: 2, name: 'Client existant' },
  ];
  const eventChosenAddress = [
    { id: 1, name: 'Adresse du client' },
    { id: 2, name: 'Autre adresse' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client === '1') {
      createUser();
    }
    createEvent();
    setOpenCreateEventModale(false);
  };

  const filteredAdresses = addresses.filter(
    (filteredAddress) => filteredAddress.properties.city === city.nom,
  );

  const handleSearchUser = (e) => {
    const userIdentity = users.find(
      (userFound) => `${userFound.lastname} ${userFound.firstname}` === e.target.value,
    );

    if (userIdentity) {
      setChosenUser(userIdentity);
      setEventAddress('');
      setEventAddress({
        address: userIdentity.address,
        lat: userIdentity.lat,
        lon: userIdentity.lon,
      });
    }
    else {
      searchUsers(e.target.value);
    }
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

  const handleSearchAddress = (e) => {
    const userAddress = addresses.find(
      (foundAddress) => foundAddress.properties.label === e.target.value,
    );

    if (userAddress) {
      setUserAddress(userAddress);
      setEventAddress('');
      setEventAddress(userAddress);
    }
    else {
      searchAddress(e.target.value);
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

  const date = new Date(chosenDay).getDate();
  const month = new Date(chosenDay).getMonth();
  const year = new Date(chosenDay).getFullYear();
  const hour = new Date(chosenDay).getHours();
  const minutes = new Date(chosenDay).getMinutes();

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
          <div>
            Ajouter un rendez-vous le{' '}
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
            <div className="event-modal-form-part">
              <div className="event-modal-form-part-subtitle">
                Heure de début :{' '}
                {`${new Date(chosenDay).getHours()} h ${new Date(
                  chosenDay,
                ).getMinutes()}`}
              </div>
              <Field
                id="endTime"
                name="endTime"
                type="datetime-local"
                placeholder="Heure de fin"
                onChange={changeField}
                value={endTime}
                min={new Date(year, month, date, hour, minutes)
                  .toISOString()
                  .slice(0, -8)}
                max={new Date(year, month, date, '20', '45')
                  .toISOString()
                  .slice(0, -8)}
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
              <Select
                id="client"
                name="client"
                placeholder="Client"
                value={client}
                type="select"
                datas={userChoice}
                onChange={changeField}
                label="Client"
              />
              {client === '2' && (
                <Datalist
                  id="search"
                  name="search"
                  type="text"
                  list="user"
                  title="Chercher un client"
                  placeholder="Chercher un client"
                  datas={users}
                  onInput={handleSearchUser}
                />
              )}
              <>
                {client && (
                  <>
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
                              <Icon
                                path={mdiClose}
                                title="close modal"
                                size={1}
                              />
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
                        {client === '2' && (
                          <>
                            <div>{chosenUser.address}</div>
                          </>
                        )}
                        <>
                          {client === '1' && eventAddress.length !== 0 && (
                            <div className="event-address">{eventAddress}</div>
                          )}
                        </>
                      </div>
                    )}
                  </>
                )}
              </>
            </div>
            <div className="event-modal-form-part right">
              <Field
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Prénom"
                disabled={client === '2' || client === ''}
                value={firstname}
                onChange={changeField}
              />
              <Field
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Nom"
                disabled={client === '2' || client === ''}
                value={lastname}
                onChange={changeField}
              />
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                disabled={client === '2' || client === ''}
                value={email}
                onChange={changeField}
              />
              <Field
                id="phone"
                name="phone"
                type="tel"
                placeholder="Numéro de téléphone"
                disabled={client === '2' || client === ''}
                value={phone}
                onChange={changeField}
              />
              <Datalist
                id="cities"
                name="cities"
                type="text"
                list="city"
                title="Ville"
                placeholder="Ville"
                disabled={client === '2' || client === ''}
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
                disabled={client === '2' || client === ''}
                datas={filteredAdresses}
                onInput={handleSearchAddress}
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
  cities: PropTypes.array,
  addresses: PropTypes.array,
  city: PropTypes.object,
  changeField: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
  searchCity: PropTypes.func.isRequired,
  searchAddress: PropTypes.func.isRequired,
  setUserAddress: PropTypes.func.isRequired,
  setUserCity: PropTypes.func.isRequired,
  users: PropTypes.array,
  chosenUser: PropTypes.object,
  setChosenUser: PropTypes.func.isRequired,
  client: PropTypes.string,
  chosenEventAddress: PropTypes.string,
  setEventAddress: PropTypes.func.isRequired,
  eventAddress: PropTypes.string,
  createUser: PropTypes.func.isRequired,
  setStartTime: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
};

CreateEventModale.defaultProps = {
  prestaId: '',
  endTime: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  cities: [],
  addresses: [],
  city: {},
  users: [],
  chosenUser: {},
  client: '',
  chosenEventAddress: '',
  eventAddress: '',
};

export default CreateEventModale;
