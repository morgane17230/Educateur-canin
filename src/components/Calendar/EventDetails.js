import React from 'react';

// StyleSheet

import 'src/styles/eventdetails.scss';

const EventDetails = () => {
  console.log('eventDetails');
  return (
    <div className="event-details">
      <div className="event-details-header">Détail du rendez-vous</div>
      <div className="event-details-content">Heure</div>
      <div className="event-details-content">Client</div>
      <div className="event-details-content">Adresse</div>
      <div className="event-details-content">Téléphone</div>
      <div className="event-details-content">Prestation</div>
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

export default EventDetails;
