/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

// StyleSheet

import 'src/styles/datepicker.scss';

const DatePicker = ({
  year,
  month,
  daysInMonth,
  setDaysInMonth,
  getNextDate,
  getPrevDate,
  setChosenDay,
}) => {
  // Number of Days in Month

  if (month <= 7) {
    if (month % 2 === 0) {
      setDaysInMonth(30);
    }
    else {
      setDaysInMonth(31);
    }
  }
  else if (month % 2 === 1) {
    setDaysInMonth(30);
  }
  else {
    setDaysInMonth(31);
  }
  if (month === 2) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          setDaysInMonth(28);
        }
        else {
          setDaysInMonth(29);
        }
      }
      else {
        setDaysInMonth(29);
      }
    }
    else {
      setDaysInMonth(28);
    }
  }

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
        new Date(year, month - 1, start.getDate() + i).getDate() - lessDays,
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
    <div className="datepicker">
      <div className="datepicker-header">
        <button
          className="prevyear"
          aria-label="previous year"
          type="button"
          onClick={getPrevDate}
        >
          <Icon path={mdiChevronLeft} title="next date" size={1} />
        </button>
        <span>
          {new Date(
            Date.UTC(year, month, 0, 0, 0, 0),
          ).toLocaleDateString('fr-FR', { month: 'long' })}{' '}
          {year}
        </span>
        <button
          className="next-year"
          aria-label="next year"
          type="button"
          onClick={getNextDate}
        >
          <Icon path={mdiChevronRight} title="next date" size={1} />
        </button>
      </div>
      <div className="datepicker-content-header">
        <div>Lun</div>
        <div>Mar</div>
        <div>Mer</div>
        <div>Jeu</div>
        <div>Ven</div>
        <div>Sam</div>
        <div>Dim</div>
      </div>
      <div className="datepicker-content">{days.map(dayList)}</div>
    </div>
  );
};

DatePicker.propTypes = {
  year: PropTypes.number.isRequired,
  getPrevDate: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  getNextDate: PropTypes.func.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  setDaysInMonth: PropTypes.func.isRequired,
  setChosenDay: PropTypes.func.isRequired,
};

export default DatePicker;
