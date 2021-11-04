import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/eventdetails.scss';

const EventDetails = ({ events, eventValue }) => {
  const eventFound = events.find((event) => event.id === eventValue);

  return (
    <div className="event-details">
      <div className="event-details-header">
        <span>Détail du rendez-vous</span>
      </div>
      <div className="event-details-content">
        <div>
          Date :
        </div>
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

      </div>
      <div className="event-details-content">
        <div>Client :</div>
        {eventFound ? (
          <span>
            {eventFound.user.firstname} {eventFound.user.lastname}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className="event-details-content">
        <div>Adresse :</div>
        {eventFound ? (
          <span>
            {eventFound.user.housenumber} {eventFound.user.street}
            {eventFound.user.postcode} {eventFound.user.city}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className="event-details-content">
        <div>Téléphone :</div>
        {eventFound ? <span>{eventFound.user.phone}</span> : ''}
      </div>
      <div className="event-details-content">
        <div>Prestation :</div>
        {eventFound ? <span>{eventFound.presta.name}</span> : ''}
      </div>
      <div className="event-details-buttons">
        <a href="#" type="button" className="event-details-buttons-item">
          Modifier
        </a>
        <a href="#" type="button" className="event-details-buttons-item">
          Supprimer
        </a>
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
