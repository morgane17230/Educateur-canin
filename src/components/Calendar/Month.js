/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/scheduler.scss';

const Month = ({
  events,
  year,
  month,
  setChosenDay,
  daysInMonth,
  chosenDay,
  setEventValue,
  setCreateEventModale,
}) => {
  // month display

  const days = [];
  const start = new Date(year, month);
  const end = new Date(year, month + 1, 0);
  const dayOfWeekStart = start.getDay();
  const dayOfWeekEnd = end.getDay();

  const lessDays = dayOfWeekStart === 0 ? 6 : dayOfWeekStart - 1;
  const moreDays = dayOfWeekEnd === 0 ? 0 : 7 - dayOfWeekEnd;

  for (let i = 0; i < daysInMonth + lessDays + moreDays; ++i) {
    const weekDay = new Date(
      new Date(year, month, start.getDate() + i).setDate(
        new Date(year, month, start.getDate() + i).getDate() - lessDays,
      ),
    );
    days.push(Date.parse(weekDay));
  }

  const dayList = (day) => (
    <div
      key={day}
      type="button"
      onClick={() => {
        setChosenDay(new Date(day));
      }}
      onDoubleClick={() => setCreateEventModale(true)}
      className={`scheduler-content-month-item 
          ${new Date(day).getMonth() !== month ? 'out' : ''}
          ${
              new Date(day).getMonth() === month
              && new Date(day).getDate() === new Date(chosenDay).getDate()
                ? ' today'
                : ''
          }`}
    >
      {new Date(day).toLocaleDateString('fr-FR', {
        weekday: 'short',
        day: 'numeric',
      })}
      <div>
        {events.map(
          (event) => Date.parse(
            new Date(
              new Date(
                new Date(Number(event.start_time)).setHours(0),
              ).setMinutes(0),
            ),
          ) === day && (
          <div
            value={event.id}
            key={`${event.id}`}
            style={{
              backgroundColor: `${event.presta.color}`,
            }}
            className="event"
            onClick={() => setEventValue(event.id)}
          />
          ),
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="scheduler-content-month">{days.map(dayList)}</div>
    </>
  );
};

Month.propTypes = {
  events: PropTypes.array,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  chosenDay: PropTypes.instanceOf(Date).isRequired,
  daysInMonth: PropTypes.number.isRequired,
  setChosenDay: PropTypes.func.isRequired,
  setEventValue: PropTypes.func.isRequired,
  setCreateEventModale: PropTypes.func.isRequired,
};

Month.defaultProps = {
  events: [],
};

export default Month;
