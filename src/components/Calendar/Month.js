/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet

import 'src/styles/scheduler.scss';

const Scheduler = ({
  year,
  month,
  setChosenDay,
  daysInMonth,
}) => {
  // month display

  const days = [];
  const start = new Date(year, month - 1);
  const end = new Date(year, month, 0);
  const dayOfWeekStart = start.getDay();
  const dayOfWeekEnd = end.getDay();

  const lessDays = dayOfWeekStart === 0 ? 6 : dayOfWeekStart - 1;
  const moreDays = dayOfWeekEnd === 0 ? 0 : 7 - dayOfWeekEnd;

  for (let i = 0; i < daysInMonth + lessDays + moreDays; ++i) {
    const weekDay = new Date(
      new Date(year, month - 1, start.getDate() + i).setDate(
        new Date(year, month - 1, start.getDate() + i).getDate()
                  - lessDays,
      ),
    );
    days.push(Date.parse(weekDay));
  }

  const dayList = (day) => (
    <button
      key={day}
      type="button"
      onClick={() => setChosenDay(day)}
      className={
                 new Date(day).getMonth() + 1 === month
                   ? 'datepicker-content-item'
                   : 'datepicker-content-item out'
             }
    >
      {new Date(day).toLocaleDateString('fr-FR', { day: 'numeric' })}
    </button>
  );

  return (
    <>
      <div>{ days.map(dayList) }</div>
    </>

  );
};

Scheduler.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  setChosenDay: PropTypes.func.isRequired,
};

export default Scheduler;
