/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/scheduler.scss';

const Day = ({
  chosenDay,
  events,
  setEventValue,
  setCreateEventModale,
}) => {
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
            onDoubleClick={() => setCreateEventModale(true)}
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
                                value={event.id}
                                style={{
                                  backgroundColor: `${event.presta.color}`,
                                }}
                                key={`${event.id}`}
                                className="event"
                                onClick={() => setEventValue(event.id)}
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
  setEventValue: PropTypes.func.isRequired,
  setCreateEventModale: PropTypes.func.isRequired,
  events: PropTypes.array,
};

Day.defaultProps = {
  events: [],
};

export default Day;
