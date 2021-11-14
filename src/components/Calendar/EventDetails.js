import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/eventdetails.scss';

let eventFound = {};
const EventDetails = ({ events, eventValue, setOpenModifyEventModale }) => {
  eventFound = events.find((event) => event.id === eventValue);

  return (
    <div className="event-details">
      <div className="event-details-header">
        <span>Détail du rendez-vous</span>
      </div>
      <ul className="event-details-content">
        <li className="event-details-content-item">
          <div>Date :</div>
          {eventFound ? (
            <span>
              {new Date(
                Number(eventFound.start_time),
              ).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </span>
          ) : (
            ''
          )}
        </li>

        <li className="event-details-content-item">
          <div>Client :</div>
          {eventFound ? (
            <span>
              {eventFound.user.firstname}{' '}
              {eventFound.user.lastname}
            </span>
          ) : (
            ''
          )}
        </li>

        <li className="event-details-content-item">
          <div>Adresse :</div>
          {eventFound ? (
            <span>
              {eventFound.user.housenumber}{' '}
              {eventFound.user.street}
              {eventFound.user.postcode} {eventFound.user.city}
            </span>
          ) : (
            ''
          )}
        </li>
        <li className="event-details-content-item">
          <div>Téléphone :</div>
          {eventFound ? <span>{eventFound.user.phone}</span> : ''}
        </li>
        <li className="event-details-content-item">
          <div>Prestation :</div>
          {eventFound ? <span>{eventFound.presta.name}</span> : ''}
        </li>
      </ul>
      {eventFound
            && (
            <div className="event-details-buttons">
              <a
                href="#"
                type="button"
                className="event-details-buttons-item"
                onClick={() => setOpenModifyEventModale(true)}
              >
                Modifier
              </a>
              <a
                href="#"
                type="button"
                className="event-details-buttons-item"
              >
                Supprimer
              </a>
            </div>
            )}

    </div>
  );
};

EventDetails.propTypes = {
  events: PropTypes.array,
  eventValue: PropTypes.number,
  setOpenModifyEventModale: PropTypes.func.isRequired,
};

EventDetails.defaultProps = {
  events: [],
  eventValue: 0,
};

export default EventDetails;
