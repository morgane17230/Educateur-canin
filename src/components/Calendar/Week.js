/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/scheduler.scss';

const Week = ({
  setEventValue,
  events,
  year,
  chosenDay,
  month,
  setChosenDay,
  setCreateEventModale,
}) => {
  // week display

  const dayHours = [[], [], [], [], [], [], []];
  const dayHoursHeader = [];
  const currentDate = new Date(chosenDay);
  const currentDay = currentDate.getDay();
  const lessDays = currentDay === 0 ? 6 : currentDay - 1;
  for (let i = 0; i < 7; i++) {
    for (let h = 8; h <= 18; h++) {
      for (let m = 0; m < 4; m++) {
        const weekDay = new Date(
          new Date(year, month, currentDate.getDate() + i).setDate(
            new Date(
              year,
              currentDate.getMonth(),
              currentDate.getDate() + i,
            ).getDate() - lessDays,
          ),
        );
        weekDay.setHours(h);
        weekDay.setMinutes(15 * m);
        weekDay.setUTCSeconds(0);
        dayHours[i].push(Date.parse(weekDay));
      }
    }
  }

  const weekHourList = (hour, index) => (
    <div
      key={`hour-${index}`}
      className="scheduler-content-item"
      value={hour}
      onClick={() => {
        setChosenDay(new Date(hour));
      }}
      onDoubleClick={() => setCreateEventModale(true)}
    >
      {events.map(
        (event) => event.start_time <= hour
                  && event.end_time > hour && (
                  <div
                    key={`${event.id}`}
                    style={{ backgroundColor: `${event.presta.color}` }}
                    className="event"
                    value={event.id}
                    onClick={() => setEventValue(event.id)}
                  />
        ),
      )}
    </div>
  );

  const weekDaysList = (dayHour, index) => (
    <div key={`hours-${index}`} className="scheduler-content-hours">
      <div
        key={index}
        className={`scheduler-content-weekdays
          ${
              new Date(dayHour[0]).getMonth() === month
              && new Date(dayHour[0]).getDate() === new Date(chosenDay).getDate()
                ? 'today'
                : ''
          }`}
      >
        {new Date(dayHour[0]).toLocaleDateString('fr-FR', {
          weekday: 'short',
          day: 'numeric',
        })}
      </div>
      {dayHour.map(weekHourList)}
    </div>
  );

  for (let h = 8; h <= 18; h++) {
    for (let m = 0; m < 4; m++) {
      dayHoursHeader.push(m === 0 ? `${h}h` : `${h}h${m * 15}`);
    }
  }

  return (

    <div className="scheduler-content">
      <div className="scheduler-content-hours">
        <div className="scheduler-content-header-item">Heures</div>
        {dayHoursHeader.map((item) => (
          <div
            key={`header-${item}`}
            className="scheduler-content-header-item"
          >
            {item}
          </div>
        ))}
      </div>
      {dayHours.map(weekDaysList)}
    </div>
  );
};

Week.propTypes = {
  events: PropTypes.array,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  chosenDay: PropTypes.instanceOf(Date).isRequired,
  setChosenDay: PropTypes.func.isRequired,
  setEventValue: PropTypes.func.isRequired,
  setCreateEventModale: PropTypes.func.isRequired,
};

Week.defaultProps = {
  events: [],
};

export default Week;
