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
  setOpenCreateEventModale,
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
        const minutes = [];
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
        for (let l = 0; l < 3; l++) {
          minutes.push(Date.parse(weekDay) + 60000 * (5 * l));
        }
        dayHours[i].push(minutes);
      }
    }
  }

  const weekHourList = (hour, index) => (
    <div
      key={`hour-${index}`}
      className="scheduler-content-item"
      value={hour[0]}
    >
      {hour.map((h) => {
        const hasEvent = events.filter(
          (event) => event.start_time <= h && event.end_time > h,
        );
        return (
          <div
            key={h}
            value={h}
            className="scheduler-content-item-minutes"
            style={
                            hasEvent.length !== 0
                              ? {
                                backgroundColor: `${hasEvent[0].presta.color}`,
                              }
                              : {}
                        }
            onClick={(e) => {
              e.preventDefault();
              setEventValue(
                hasEvent.length !== 0 ? hasEvent[0].id : null,
              );
              setOpenCreateEventModale(hasEvent.length === 0);
              setChosenDay(new Date(h));
            }}
          />
        );
      })}
    </div>
  );

  const weekDaysList = (dayHour, index) => (
    <div key={`hours-${index}`} className="scheduler-content-hours">
      <div
        key={index}
        onClick={() => setChosenDay(new Date(dayHour[0][0]))}
        className={`scheduler-content-weekdays
          ${
              new Date(dayHour[0][0]).getMonth() === month
              && new Date(dayHour[0][0]).getDate()
                  === new Date(chosenDay).getDate()
                ? 'today'
                : ''
          }`}
      >
        {new Date(dayHour[0][0]).toLocaleDateString('fr-FR', {
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
  setOpenCreateEventModale: PropTypes.func.isRequired,
};

Week.defaultProps = {
  events: [],
};

export default Week;
