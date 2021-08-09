/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Week from './Week';
import Month from './Month';
import Day from './Day';

// StyleSheet

import 'src/styles/scheduler.scss';

const Scheduler = ({
  year,
  month,
  setDate,
  daysInMonth,
  setDaysInMonth,
  getNextDate,
  getPrevDate,
  chosenDay,
  setChosenDay,
}) => {
  const [displayMonth, setDisplayMonth] = useState(false);
  const [displayWeek, setDisplayWeek] = useState(true);
  const [displayDay, setDisplayDay] = useState(false);

  const onDisplayWeek = () => {
    setDisplayWeek(true);
    setDisplayMonth(false);
    setDisplayDay(false);
  };

  const onDisplayMonth = () => {
    setDisplayWeek(false);
    setDisplayMonth(true);
    setDisplayDay(false);
  };

  const onDisplayDay = () => {
    setDisplayWeek(false);
    setDisplayMonth(false);
    setDisplayDay(true);
  };

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

  return (
    <div className="scheduler">
      <div className="scheduler-header">
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

        <div className="scheduler-header-choice">
          <button aria-label="day" type="button" onClick={onDisplayDay}>
            Jour
          </button>
          <button
            aria-label="week"
            type="button"
            onClick={onDisplayWeek}
          >
            Semaine
          </button>
          <button
            aria-label="month"
            type="button"
            onClick={onDisplayMonth}
          >
            Mois
          </button>
        </div>
        <button
          className="next-year"
          aria-label="next year"
          type="button"
          onClick={getNextDate}
        >
          <Icon path={mdiChevronRight} title="next date" size={1} />
        </button>
      </div>
      {displayWeek && (
      <Week
        setDate={setDate}
        daysInMonth={daysInMonth}
        chosenDay={chosenDay}
        year={year}
        month={month}
      />
      )}
      {displayDay && (
      <Day
        setDate={setDate}
        daysInMonth={daysInMonth}
        chosenDay={chosenDay}
        year={year}
        month={month}
      />
      )}
      {displayMonth && (
      <Month
        daysInMonth={daysInMonth}
        chosenDay={chosenDay}
        year={year}
        month={month}
        setChosenDay={setChosenDay}
      />
      )}
    </div>
  );
};

Scheduler.propTypes = {
  year: PropTypes.number.isRequired,
  getPrevDate: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  getNextDate: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  setDaysInMonth: PropTypes.func.isRequired,
  chosenDay: PropTypes.number.isRequired,
  setChosenDay: PropTypes.func.isRequired,
};

export default Scheduler;
