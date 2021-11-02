/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import events from 'src/data/events.json';

// StyleSheet

import 'src/styles/scheduler.scss';

const Day = ({ chosenDay }) => {
  const dayHours = [];
  for (let h = 8; h <= 18; h++) {
    for (let m = 0; m < 4; m++) {
      const weekDay = new Date(chosenDay);
      weekDay.setHours(h);
      weekDay.setMinutes(m * 15);
      weekDay.setUTCSeconds(0);
      dayHours.push(Date.parse(weekDay));
    }
  }

  // début RDV >= date de la case

  return (
    <div className="scheduler-content">
      <div className="scheduler-content-day">
        <div className="scheduler-content-day-item">Heures</div>{' '}
        {dayHours.map((dayHour, index) => (
          <div
            key={`day-${index}`}
            value={`${dayHour}`}
            onClick={() => console.log(new Date(dayHour))}
            className="scheduler-content-day-item"
          >
            <span>
              {new Date(dayHour).getHours()}h
              {new Date(dayHour).getMinutes() === 0
                ? null
                : new Date(dayHour).getMinutes()}
            </span>
            {events.map(
              (event) => event.start_time <= dayHour
                              && event.end_time > dayHour && (
                              <div
                                value={event.start_time}
                                key={`${event.start_time}`}
                                style={{ backgroundColor: `${event.color}` }}
                                className="event"
                              />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Day.propTypes = {
  chosenDay: PropTypes.any.isRequired,
};

export default Day;
