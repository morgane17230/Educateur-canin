/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
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
  getNextMonth,
  getPrevMonth,
  chosenDay,
  setChosenDay,
}) => {
  // Number of Days in Month
  useEffect(() => {
    if ((month + 1) <= 7) {
      if ((month + 1) === 2) {
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
      else if ((month + 1) % 2 === 0) {
        setDaysInMonth(30);
      }
      else {
        setDaysInMonth(31);
      }
    }
    else if ((month + 1) > 8) {
      if ((month + 1) % 2 === 0) {
        setDaysInMonth(31);
      }
      else {
        setDaysInMonth(30);
      }
    }
  }, [month]);

  const days = [];

  const start = new Date(year, month);
  const end = new Date(year,
    month + 1, 0);
  const dayOfWeekStart = start.getDay();
  const dayOfWeekEnd = end.getDay();

  const lessDays = dayOfWeekStart === 0 ? 6 : dayOfWeekStart - 1;
  const moreDays = dayOfWeekEnd === 0 ? 0 : 7 - dayOfWeekEnd;

  for (let i = 0; i < daysInMonth + lessDays + moreDays; ++i) {
    const weekDay = new Date(
      new Date(
        year,
        month,
        start.getDate() + i,
      ).setDate(
        new Date(year,
          month, start.getDate() + i).getDate() - lessDays,
      ),
    );
    days.push(Date.parse(weekDay));
  }
  const dayList = (day) => (
    <div
      key={day}
      type="button"
      id={day}
      onClick={() => setChosenDay(new Date(day))}
      className={`datepicker-content-item 
          ${new Date(day).getMonth() !== month ? 'out' : ''}
          ${new Date(day).getMonth() === month
            && new Date(day).getDate() === new Date(chosenDay).getDate()
        ? 'today'
        : ''
          }`}
    >
      {new Date(day).toLocaleDateString('fr-FR', { day: 'numeric' })}
    </div>
  );

  return (
    <div className="datepicker">
      <div className="datepicker-header">
        <button
          className="prevyear"
          aria-label="previous year"
          type="button"
          onClick={getPrevMonth}
        >
          <Icon path={mdiChevronLeft} title="next date" size={1} />
        </button>
        <div>
          {new Date(
            chosenDay,
          ).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}{' '}
        </div>
        <button
          className="next-year"
          aria-label="next year"
          type="button"
          onClick={getNextMonth}
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
  getPrevMonth: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  chosenDay: PropTypes.instanceOf(Date).isRequired,
  getNextMonth: PropTypes.func.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  setDaysInMonth: PropTypes.func.isRequired,
  setChosenDay: PropTypes.func.isRequired,
};

export default DatePicker;
