/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/scheduler.scss';

const Scheduler = ({
  chosenDay,
}) => {
  const dayHours = [];
  for (let h = 8; h <= 18; h++) {
    for (let m = 0; m < 4; m++) {
      const weekDay = new Date(chosenDay);
      weekDay.setHours(h);
      weekDay.setMinutes(m * 15);
      dayHours.push(Date.parse(weekDay));
    }
  }

  return (
    <div className="scheduler-content">
      <div className="scheduler-content-day">
        <div className="scheduler-content-day-item">Heures</div>{' '}
        {dayHours.map((dayHour, index) => (
          <div
            key={`day-${index}`}
            onClick={() => console.log(new Date(dayHour))}
            className="scheduler-content-day-item"
          >
            {new Date(dayHour).getHours()}h
            {new Date(dayHour).getMinutes() === 0
              ? null
              : new Date(dayHour).getMinutes()}
          </div>
        ))}
      </div>
    </div>
  );
};

Scheduler.propTypes = {
  chosenDay: PropTypes.number.isRequired,
};

export default Scheduler;
