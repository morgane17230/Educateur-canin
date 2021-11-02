import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/eventdetails.scss';

const EventDetails = ({ events, eventValue }) => {
  const eventFound = events.find((event) => event.id === eventValue);

  return (
    <div className="event-details">
      <div className="event-details-header">
        <span>Détail du rendez-vous :</span>
      </div>
      <div className="event-details-content">
        <span>
          Date :{' '}
          {eventFound ? (
            <span>
              {' '}
              {new Date(
                Number(eventFound.start_time),
              ).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}{' '}
            </span>
          ) : (
            ''
          )}
        </span>
      </div>
      <div className="event-details-content">
        <span>Client : </span>
        {eventFound ? (
          <span>
            {eventFound.user.firstname} {eventFound.user.lastname}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className="event-details-content">
        <span>Adresse : </span>
        {eventFound ? (
          <span>
            {eventFound.user.housenumber} {eventFound.user.street}{' '}
            {eventFound.user.postcode} {eventFound.user.city}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className="event-details-content">
        <span>Téléphone : </span>
        {eventFound ? <span>{eventFound.user.phone}</span> : ''}
      </div>
      <div className="event-details-content">
        <span>Prestation : </span>
        {eventFound ? <span>{eventFound.presta.name}</span> : ''}
      </div>
      <div className="event-details-buttons">
        <button type="button" className="event-details-buttons-item">
          Modifier
        </button>
        <button type="button" className="event-details-buttons-item">
          Supprimer
        </button>
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  events: PropTypes.array,
  eventValue: PropTypes.number.isRequired,
};

EventDetails.defaultProps = {
  events: [],
};

export default EventDetails;
